export const SubjectTypeEnum = {
  WRITTEN: "WRITTEN",
  LAB: "LAB",
};

export const ReadableSubjectTypeEnum = {
  WRITTEN: "Written",
  LAB: "Lab",
};

export const ExamNamesEnum = {
  ESE: "ESE",
  IAT1: "IAT1",
  IAT2: "IAT2",
  PROR: "PR_OR",
  TW: "TW",

  // NOTE: used internally for result pdf generation
  IA: "IA",
  TOT: "TOT",
};

export const ReadableExamNamesEnum = {
  [ExamNamesEnum.ESE]: "ESE",
  [ExamNamesEnum.IA]: "IA",
  [ExamNamesEnum.IAT1]: "IAT1",
  [ExamNamesEnum.IAT2]: "IAT2",
  [ExamNamesEnum.PROR]: "PR OR",
  [ExamNamesEnum.TOT]: "TOT",
  [ExamNamesEnum.TW]: "TW",
};

export const ExamsBySubjectType = {
  [SubjectTypeEnum.WRITTEN]: [
    ExamNamesEnum.IAT1,
    ExamNamesEnum.IAT2,
    ExamNamesEnum.ESE,
  ],
  [SubjectTypeEnum.LAB]: [ExamNamesEnum.PROR, ExamNamesEnum.TW],
};
