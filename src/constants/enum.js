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

export const ExamsWithMarksBySubjectType = {
  [SubjectTypeEnum.WRITTEN]: [
    { name: ExamNamesEnum.ESE, maxMarks: 80, minMarks: 32 },
    { name: ExamNamesEnum.IA, maxMarks: 80, minMarks: 32 },
    { name: ExamNamesEnum.TOT, maxMarks: 100, minMarks: 40 },
  ],
  [SubjectTypeEnum.LAB]: [
    { name: ExamNamesEnum.PROR, maxMarks: 25, minMarks: 10 },
    { name: ExamNamesEnum.TW, maxMarks: 25, minMarks: 10 },
    { name: ExamNamesEnum.TOT, maxMarks: 50, minMarks: 20 },
  ],
};
