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
    { name: ExamNamesEnum.IA, maxMarks: 20, minMarks: 8 },
    { name: ExamNamesEnum.TOT, maxMarks: 100, minMarks: 40 },
  ],
  [SubjectTypeEnum.LAB]: [
    { name: ExamNamesEnum.PROR, maxMarks: 25, minMarks: 10 },
    { name: ExamNamesEnum.TW, maxMarks: 25, minMarks: 10 },
    { name: ExamNamesEnum.TOT, maxMarks: 50, minMarks: 20 },
  ],
};

export const shortYearBySemester = {
  1: "F.E.",
  2: "F.E.",
  3: "S.E.",
  4: "S.E.",
  5: "T.E.",
  6: "T.E.",
  7: "B.E.",
  8: "B.E.",
};

export const longYearBySemester = {
  1: "First Year.",
  2: "First Year",
  3: "Second Year",
  4: "Second Year",
  5: "Third Year",
  6: "Third Year",
  7: "Fourth Year",
  8: "Fourt Year",
};

export const shortSemesterByNumber = {
  1: "SEM-I",
  2: "SEM-II",
  3: "SEM-III",
  4: "SEM-IV",
  5: "SEM-V",
  6: "SEM-VI",
  7: "SEM-VII",
  8: "SEM-VIII",
};

export const readableSemesterByNumber = {
  1: "Semester I",
  2: "Semester II",
  3: "Semester III",
  4: "Semester IV",
  5: "Semester V",
  6: "Semester VI",
  7: "Semester VII",
  8: "Semester VIII",
};

export const StudentGenderEnum = {
  MALE: "MALE",
  FEMALE: "FEMALE",
};
