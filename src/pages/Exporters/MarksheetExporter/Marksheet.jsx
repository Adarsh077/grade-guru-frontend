import "./index.css";

const Marksheet = (props) => {
  const { examName, studentResult, subjects, maxTotal, minMarks } = props;
  console.log({ examName, studentResult, subjects, maxTotal, minMarks });
  return (
    <div className="ritz grid-container" dir="ltr">
      <table className="waffle" cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th className="row-header freezebar-origin-ltr" />
            <th
              id="753164042C0"
              style={{ width: 1 }}
              className="column-headers-background"
            />
            <th
              id="753164042C1"
              style={{ width: 112 }}
              className="column-headers-background"
            />
            <th
              id="753164042C2"
              style={{ width: 150 }}
              className="column-headers-background"
            />
            <th
              id="753164042C3"
              style={{ width: 44 }}
              className="column-headers-background"
            />
            <th
              id="753164042C4"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C5"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C6"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C7"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C8"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C9"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C10"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C11"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C12"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C13"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C14"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C15"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C16"
              style={{ width: 60 }}
              className="column-headers-background"
            />
            <th
              id="753164042C17"
              style={{ width: 60 }}
              className="column-headers-background"
            />
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: 0 }}>
            <th
              id="753164042R0"
              style={{ height: 0 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
            <td className="s0" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R1"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s1" dir="ltr" colSpan={17} rowSpan={2}>
              Grade Card
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R2"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R3"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s2" dir="ltr">
              NAME
            </td>
            <td className="s3" dir="ltr" colSpan={9}>
              : {studentResult.name}
            </td>
            <td />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R4"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s2" dir="ltr">
              EXAMINATION
            </td>
            <td className="s3" dir="ltr" colSpan={9}>
              : SECOND YEAR ENGINEERING (SEMESTER-III)(C SCHEME)
            </td>
            <td />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R5"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s2" dir="ltr">
              BRANCH
            </td>
            <td className="s2" dir="ltr" colSpan={9}>
              : COMPUTER ENGINEERING
            </td>
            <td />
            <td className="s5" dir="ltr" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
            <td className="s4" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R6"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s2" dir="ltr">
              HELD IN
            </td>
            <td className="s5" dir="ltr" colSpan={9}>
              : DECEMBER 2023(REGULAR)
            </td>
            <td />
            <td className="s6" dir="ltr" />
            <td className="s6" dir="ltr" />
            <td className="s6" dir="ltr" />
            <td className="s6" dir="ltr" />
            <td className="s4" />
            <td className="s4" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R7"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s7" dir="ltr">
              SEAT NUMBER
            </td>
            <td className="s7" dir="ltr">
              : CC23223010
            </td>
            <td className="s7" dir="ltr" />
            <td className="s7" dir="ltr" />
            <td className="s7" dir="ltr" />
            <td className="s8" />
            <td className="s8" />
            <td className="s8" />
            <td className="s8" />
            <td className="s8" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
            <td className="s9" />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R8"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s10" />
            <td className="s11" dir="ltr" rowSpan={2}>
              COURSE CODE
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                COURSE TITLE
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                CC
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                AM
              </span>
            </td>
            <td className="s11" colSpan={3}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                ESE/PR/OR
              </span>
            </td>
            <td className="s11" colSpan={3}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                IA/TW
              </span>
            </td>
            <td className="s11" colSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                TOTAL
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                CE
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                GR
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                GP
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                CE X GP
              </span>
            </td>
            <td className="s11" rowSpan={2}>
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                Rmk
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R9"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s10" />
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                MIN/ MAX
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                OBT
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                Exm
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                MIN/ MAX
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                OBT
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                Exm
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                MAX
              </span>
            </td>
            <td className="s11">
              <span
                style={{
                  fontSize: "11pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                OBT
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R10"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSC301
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                ENGINEERING MATHEMATICS-III
              </span>
            </td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                ESE
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                32/80
              </span>
            </td>
            <td className="s15">51</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                08/20
              </span>
            </td>
            <td className="s15">12</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">100</td>
            <td className="s15">63</td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                C
              </span>
            </td>
            <td className="s15">7</td>
            <td className="s15">21</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R11"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSC302
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                DISCRETE STRUCTURES AND GRAPH THEORY
              </span>
            </td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                ESE
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                32/80
              </span>
            </td>
            <td className="s15">33</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                08/20
              </span>
            </td>
            <td className="s15">14</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">100</td>
            <td className="s15">47</td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">5</td>
            <td className="s15">15</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R12"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSC303
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                DATA STRUCTURE
              </span>
            </td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                ESE
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                32/80
              </span>
            </td>
            <td className="s15">43</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                08/20
              </span>
            </td>
            <td className="s15">14</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">100</td>
            <td className="s15">57</td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                D
              </span>
            </td>
            <td className="s15">6</td>
            <td className="s15">18</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R13"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSC304
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                DIGITAL LOGIC &amp; COMPUTER
                <br />
              </span>
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                ARCHITECTURE
              </span>
            </td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                ESE
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                32/80
              </span>
            </td>
            <td className="s15">33</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                08/20
              </span>
            </td>
            <td className="s15">12</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">100</td>
            <td className="s15">45</td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">5</td>
            <td className="s15">15</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R14"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSC305
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                COMPUTER GRAPHICS
              </span>
            </td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                ESE
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                32/80
              </span>
            </td>
            <td className="s15">48</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                08/20
              </span>
            </td>
            <td className="s15">14</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">100</td>
            <td className="s15">62</td>
            <td className="s15">3</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                C
              </span>
            </td>
            <td className="s15">7</td>
            <td className="s15">21</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R15"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSL301
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                DATA STRUCTURE LAB
              </span>
            </td>
            <td className="s15">1</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                PR OR
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                10/25
              </span>
            </td>
            <td className="s15">17</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                10/25
              </span>
            </td>
            <td className="s15">19</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">50</td>
            <td className="s15">36</td>
            <td className="s15">1</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                B
              </span>
            </td>
            <td className="s15">8</td>
            <td className="s15">8</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R16"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSL302
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                DIGITAL LOGIC &amp; COMPUTER
                <br />
              </span>
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                ARCHITECTURE LAB
              </span>
            </td>
            <td className="s15">1</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                TW
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                --
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                --
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                --
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                10/25
              </span>
            </td>
            <td className="s15">22</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">25</td>
            <td className="s15">22</td>
            <td className="s15">1</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                O
              </span>
            </td>
            <td className="s15">10</td>
            <td className="s15">10</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R17"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSL303
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                COMPUTER
                <br />
              </span>
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                GRAPHICS LAB
              </span>
            </td>
            <td className="s15">1</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                PR OR
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                10/25
              </span>
            </td>
            <td className="s15">18</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                10/25
              </span>
            </td>
            <td className="s15">19</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">50</td>
            <td className="s15">37</td>
            <td className="s15">1</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                B
              </span>
            </td>
            <td className="s15">8</td>
            <td className="s15">8</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R18"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSL304
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                OBJECT ORIENTED PROGRAMMING WITH JAVA
              </span>
            </td>
            <td className="s15">2</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                PR OR
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                10/25
              </span>
            </td>
            <td className="s15">20</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                20/50
              </span>
            </td>
            <td className="s15">43</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">75</td>
            <td className="s15">63</td>
            <td className="s15">2</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                O
              </span>
            </td>
            <td className="s15">10</td>
            <td className="s15">20</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R19"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s13">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                CSM301
              </span>
            </td>
            <td className="s14">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                MINI PROJECT - 1 A
              </span>
            </td>
            <td className="s15">2</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                PR OR
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                10/25
              </span>
            </td>
            <td className="s15">18</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                10/25
              </span>
            </td>
            <td className="s15">20</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E
              </span>
            </td>
            <td className="s15">50</td>
            <td className="s15">38</td>
            <td className="s15">2</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                A
              </span>
            </td>
            <td className="s15">9</td>
            <td className="s15">18</td>
            <td className="s16">
              <span style={{ fontSize: "10pt", fontFamily: "Times New Roman" }}>
                E,C
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R20"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s17" colSpan={3}>
              <span style={{ fontSize: "12pt", fontFamily: "Times New Roman" }}>
                Credit : 23
              </span>
            </td>
            <td className="s17" colSpan={7} />
            <td className="s17" colSpan={7} />
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="753164042R21"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s12" />
            <td className="s17" colSpan={3}>
              <span style={{ fontSize: "12pt", fontFamily: "Times New Roman" }}>
                Grand Total : 488/775
              </span>
            </td>
            <td className="s17" dir="ltr" colSpan={7} />
            <td className="s17" colSpan={7} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Marksheet;
