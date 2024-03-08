import { isAxiosError } from "axios";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import appConfig from "./appConfig";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export class AppError extends Error {
  name = "";
  message = "";
  errors = {};

  constructor({ errors, message, name }) {
    super(message || JSON.stringify(errors));

    if (!message && !appConfig.isDev) {
      message = "Something went wrong!";
    }

    this.name = name;
    this.message = message;
    this.errors = errors;
  }
}

export const gracelyHandleError = (err) => {
  if (err instanceof AppError) {
    return err;
  } else {
    return new AppError({
      message: err.message,
      name: "Error",
    });
  }
};

const catchAsync = (fn) => {
  const asyncFunc = async (...args) => {
    try {
      return await fn(...args);
    } catch (err) {
      if (import.meta.env.DEV) {
        console.log(err);
      }

      if (err instanceof AppError) {
        throw err;
      }

      if (isAxiosError(err)) {
        if (err.response?.data?.message) {
          if (typeof err.response.data.message === "object") {
            if (err.response.data.message.message) {
              throw new AppError({
                message: err.response.data.message.message,
                name: "Error",
              });
            } else {
              throw new AppError({
                errors: err.response.data.message,
              });
            }
          } else {
            throw new AppError({
              message: err.response.data.message,
              name: "Error",
            });
          }
        }
      }

      throw new AppError({
        message: err.message,
        name: "Error",
      });
    }
  };

  return asyncFunc;
};

export default catchAsync;
