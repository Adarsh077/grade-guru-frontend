import { DateTime } from "luxon";
import "./HallTickerExporter.css";

const HallTicket = (props) => {
  const { examName, student, subjectsWithDates } = props;
  return (
    <div
      style={{ position: "relative" }}
      className="ritz grid-container"
      dir="ltr"
    >
      <img
        src="/ucoe-logo.jpeg"
        width={80}
        height={80}
        style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}
      />
      <table className="waffle" cellSpacing={0} cellPadding={0}>
        <thead>
          <tr>
            <th className="row-header freezebar-origin-ltr" />
            <th
              id="27978291C0"
              style={{ width: 1 }}
              className="column-headers-background"
            />
            <th
              id="27978291C1"
              style={{ width: 133 }}
              className="column-headers-background"
            />
            <th
              id="27978291C2"
              style={{ width: 35 }}
              className="column-headers-background"
            />
            <th
              id="27978291C3"
              style={{ width: 353 }}
              className="column-headers-background"
            />
            <th
              id="27978291C4"
              style={{ width: 27 }}
              className="column-headers-background"
            />
            <th
              id="27978291C5"
              style={{ width: 38 }}
              className="column-headers-background"
            />
            <th
              id="27978291C6"
              style={{ width: 49 }}
              className="column-headers-background"
            />
            <th
              id="27978291C7"
              style={{ width: 55 }}
              className="column-headers-background"
            />
            <th
              id="27978291C8"
              style={{ width: 27 }}
              className="column-headers-background"
            />
            <th
              id="27978291C9"
              style={{ width: 175 }}
              className="column-headers-background"
            />
          </tr>
        </thead>
        <tbody>
          <tr style={{ height: 0 }}>
            <th
              id="27978291R0"
              style={{ height: 0 }}
              className="row-headers-background"
            />
            <td className="s0" />
            <td className="s1" />
            <td className="s1" />
            <td className="s1" />
            <td className="s1" />
            <td className="s1" />
            <td className="s1" />
            <td className="s1" />
            <td className="s1" />
            <td className="s1" />
          </tr>
          <tr style={{ height: 93 }}>
            <th
              id="27978291R1"
              style={{ height: 93 }}
              className="row-headers-background"
            />
            <td className="s2" />
            <td className="s3" dir="ltr" colSpan={9}>
              Vidya Vikas Education Trust&apos;s
              <br />
              <span style={{ fontSize: "13pt" }}>
                Universal College of Engineering
                <br />
              </span>
              Survey Number 146 (part)Village Kaman Kaman Bhivandi Road
              (Maharashtra State Highway 4) Taluka Vasai
              <br />
              <span style={{ fontSize: "10pt" }}>University of Mumbai</span>
            </td>
          </tr>
          <tr style={{ height: 32 }}>
            <th
              id="27978291R2"
              style={{ height: 32 }}
              className="row-headers-background"
            />
            <td className="s4" />
            <td className="s5" colSpan={3} rowSpan={2}>
              <span
                style={{
                  fontSize: "9pt",
                  fontFamily: "Arial MT, Arial",
                }}
              >
                {examName}
              </span>
            </td>
            <td className="s6" colSpan={2}>
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                CENTRE
              </span>
            </td>
            <td className="s6" colSpan={3}>
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                SEAT
              </span>
              <span style={{ fontSize: "8pt", fontFamily: "Times New Roman" }}>
                {" "}
              </span>
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                NO.:
              </span>
            </td>
            <td className="s7" rowSpan={3}>
              <span style={{ fontSize: "9pt", fontFamily: "Arial MT, Arial" }}>
                STUDENT&apos;S
              </span>
              <span style={{ fontSize: "9pt", fontFamily: "Times New Roman" }}>
                {" "}
              </span>
              <span style={{ fontSize: "9pt", fontFamily: "Arial MT, Arial" }}>
                PHOTO
              </span>
            </td>
          </tr>
          <tr style={{ height: 39 }}>
            <th
              id="27978291R3"
              style={{ height: 39 }}
              className="row-headers-background"
            />
            <td className="s4" />
            <td className="s8" colSpan={2}>
              982
            </td>
            <td className="s9" colSpan={3}>
              <span style={{ fontSize: "9pt", fontFamily: "Arial MT, Arial" }}>
                {student.eseSeatNo}
              </span>
            </td>
          </tr>
          <tr style={{ height: 20 }}>
            <th
              id="27978291R4"
              style={{ height: 20 }}
              className="row-headers-background"
            />
            <td className="s4" />
            <td className="s10" colSpan={2} rowSpan={2}>
              <span style={{ fontSize: "9pt", fontFamily: "Arial MT, Arial" }}>
                CANDIDATES
              </span>
              <span style={{ fontSize: "9pt", fontFamily: "Times New Roman" }}>
                {" "}
              </span>
              <span style={{ fontSize: "9pt", fontFamily: "Arial MT, Arial" }}>
                NAME
              </span>
              <span style={{ fontSize: "9pt", fontFamily: "Times New Roman" }}>
                {" "}
              </span>
              <span style={{ fontSize: "9pt", fontFamily: "Arial MT, Arial" }}>
                :
              </span>
            </td>
            <td className="s11" colSpan={6} rowSpan={2}>
              <span
                style={{
                  fontSize: "9pt",
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                {student.name}
              </span>
            </td>
          </tr>
          <tr style={{ height: 10 }}>
            <th
              id="27978291R5"
              style={{ height: 10 }}
              className="row-headers-background"
            />
            <td className="s4" />
            <td className="s12" dir="ltr" rowSpan={2}>
              Candidate&apos;s Signature <br />
            </td>
          </tr>
          <tr style={{ height: 31 }}>
            <th
              id="27978291R6"
              style={{ height: 31 }}
              className="row-headers-background"
            />
            <td className="s4" />
            <td className="s13" style={{ borderRight: 0 }} colSpan={2}>
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                SUBJECT
              </span>
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Times New Roman",
                }}
              >
                {" "}
              </span>
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                CODE.
              </span>
            </td>
            <td className="s13">
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Times New Roman",
                  borderRight: 0,
                  fontWeight: "bold",
                }}
              >
                SUBJECT
              </span>
            </td>
            <td
              className="s14"
              style={{
                // backgroundColor: "black",
                borderRight: "0px !important",
                borderLeft: "0px !important",
              }}
            />
            <td className="s13" colSpan={2}>
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                DATE
              </span>
            </td>
            <td className="s13" colSpan={2}>
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                TIME
              </span>
            </td>
          </tr>
          <tr style={{ height: 183 }}>
            <th
              id="27978291R7"
              style={{ height: 183 }}
              className="row-headers-background"
            />
            <td className="s4" />
            <td className="s15">
              {subjectsWithDates.map((subject) => {
                return (
                  <>
                    <span
                      style={{ fontSize: "9pt", fontFamily: "Arial MT, Arial" }}
                    >
                      {subject.code}
                    </span>
                    <span
                      style={{ fontSize: "9pt", fontFamily: "Times New Roman" }}
                    >
                      <br />
                    </span>
                  </>
                );
              })}
            </td>
            <td className="s15" dir="ltr" colSpan={3}>
              {subjectsWithDates.map((subject) => {
                return (
                  <>
                    <span style={{ fontFamily: "Arial" }}>{subject.name}</span>
                    <span
                      style={{ fontSize: "9pt", fontFamily: "Times New Roman" }}
                    >
                      <br />
                    </span>
                  </>
                );
              })}
            </td>
            <td className="s16" colSpan={3}>
              {subjectsWithDates.map((subject) => {
                return (
                  <>
                    <span style={{ fontFamily: "Arial" }}>
                      {DateTime.fromJSDate(new Date(subject.date)).toFormat(
                        "dd LLL yyyy"
                      )}
                    </span>
                    <span
                      style={{ fontSize: "9pt", fontFamily: "Times New Roman" }}
                    >
                      <br />
                    </span>
                  </>
                );
              })}
            </td>
            <td className="s17" colSpan={2}>
              {subjectsWithDates.map((subject) => {
                return (
                  <>
                    <span style={{ fontFamily: "Arial" }}>
                      {DateTime.fromFormat(
                        `2023-01-01T${subject.startTime}`,
                        "yyyy-MM-dd'T'HH:mm"
                      ).toFormat("hh:mm a")}
                    </span>
                    <span style={{ fontFamily: "Arial" }}> TO </span>
                    <span style={{ fontFamily: "Arial" }}>
                      {DateTime.fromFormat(
                        `2023-01-01T${subject.endTime}`,
                        "yyyy-MM-dd'T'HH:mm"
                      ).toFormat("hh:mm a")}
                    </span>
                    <br />
                  </>
                );
              })}
            </td>
          </tr>
          <tr style={{ height: 73 }}>
            <th
              id="27978291R8"
              style={{ height: 73 }}
              className="row-headers-background"
            />
            <td className="s4" />
            <td className="s18" colSpan={9}>
              <span
                style={{
                  fontSize: "8pt",
                  fontFamily: "Times New Roman",
                  fontWeight: "bold",
                }}
              >
                PRINCIPAL
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HallTicket;
