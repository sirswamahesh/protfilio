import React, { useState } from "react";

const Resume = () => {
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const [exprience, setExprience] = useState(false);
  const Eduction = () => {
    if (education == false) {
      setEducation(true);
    } else {
      setEducation(false);
    }
  };

  const Skills = () => {
    if (skills == false) {
      setSkills(true);
    } else {
      setSkills(false);
    }
  };
  const Exprience = () => {
    if (exprience == false) {
      setExprience(true);
    } else {
      setExprience(false);
    }
  };
  return (
    <>
      <div className="bg-primary r text-light p-5 resume">
        <div className="d-flex justify-contant-center p-3  m-5 ">
          <div className="w-100 ">
            <h1>My Resume</h1>
            <a
              href="https://drive.google.com/file/d/1x-PY3IGcobMQc7kUpiLVMK8lZGNFQcYg/view?usp=sharing"
              target="_blank"
              className="text-light text-decoration-none"
            >
              Resume PDF
            </a>
          </div>
          <div className="w-100 ">
            <hr />
            <div>
              <div
                className={` d-flex gap-3 align-items-center ${
                  education ? "arrow" : " "
                }`}
                onClick={Eduction}
              >
                <i className="fa-solid fa-chevron-right fs-5 "></i>
                <h1 className="mx-2">Education</h1>
              </div>
              <div>
                {education ? (
                  <div className="mx-3">
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">MARTICULATION(STATE BOARD)</p>
                          <p>TAGORE SEC SCH,PARASRAMPURA(JHUNJHUNU)</p>
                        </div>
                        <div className="fw-bolder ">2016-2017</div>
                      </li>
                    </ul>
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">INTERMEDIATE(STATE BOARD)</p>
                          <p>NEW INDIAN PUB SR SEC SCH,NAWALGARH</p>
                        </div>
                        <div className="fw-bolder ">2018-2019</div>
                      </li>
                    </ul>
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">
                            BACHELOR OF COMPUTER APPLICATION
                          </p>
                          <p>SETH G.B PODAR COLL,NAWALGARH</p>
                        </div>
                        <div className="fw-bolder ">2019-2022</div>
                      </li>
                    </ul>
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">
                            MASTER IN COMPUTER APPLICATION
                          </p>
                          <p>POORNIMA UNIVERSITY,JAIPUR</p>
                        </div>
                        <div className="fw-bolder ">2022-2024 [Present]</div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>

            <hr />
            <div>
              <div
                className={` d-flex gap-3 align-items-center ${
                  skills ? "arrow" : " "
                }`}
                onClick={Skills}
              >
                <i className="fa-solid fa-chevron-right fs-5 "></i>
                <h1 className="mx-2">Skills</h1>
              </div>
              <div>
                {skills ? (
                  <div className="mx-3">
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">MARTICULATION(STATE BOARD)</p>
                          <p>TAGORE SEC SCH,PARASRAMPURA(JHUNJHUNU)</p>
                        </div>
                        <div className="fw-bolder ">2016-2017</div>
                      </li>
                    </ul>
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">INTERMEDIATE(STATE BOARD)</p>
                          <p>NEW INDIAN PUB SR SEC SCH,NAWALGARH</p>
                        </div>
                        <div className="fw-bolder ">2018-2019</div>
                      </li>
                    </ul>
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">
                            BACHELOR OF COMPUTER APPLICATION
                          </p>
                          <p>SETH G.B PODAR COLL,NAWALGARH</p>
                        </div>
                        <div className="fw-bolder ">2019-2022</div>
                      </li>
                    </ul>
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">
                            MASTER IN COMPUTER APPLICATION
                          </p>
                          <p>POORNIMA UNIVERSITY,JAIPUR</p>
                        </div>
                        <div className="fw-bolder ">2022-2024 [Present]</div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <hr />
            <div>
              <div
                className={` d-flex gap-3 align-items-center ${
                  exprience ? "arrow" : " "
                }`}
                onClick={Exprience}
              >
                <i className="fa-solid fa-chevron-right fs-5 "></i>
                <h1 className="mx-2">Exprience</h1>
              </div>
              <div>
                {exprience ? (
                  <div className="mx-3">
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">MARTICULATION(STATE BOARD)</p>
                          <p>TAGORE SEC SCH,PARASRAMPURA(JHUNJHUNU)</p>
                        </div>
                        <div className="fw-bolder ">2016-2017</div>
                      </li>
                    </ul>
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">INTERMEDIATE(STATE BOARD)</p>
                          <p>NEW INDIAN PUB SR SEC SCH,NAWALGARH</p>
                        </div>
                        <div className="fw-bolder ">2018-2019</div>
                      </li>
                    </ul>
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">
                            BACHELOR OF COMPUTER APPLICATION
                          </p>
                          <p>SETH G.B PODAR COLL,NAWALGARH</p>
                        </div>
                        <div className="fw-bolder ">2019-2022</div>
                      </li>
                    </ul>
                    <ul className="nav py-3">
                      <li className="d-flex gap-5">
                        <div className="">
                          <p className="fw-bold">
                            MASTER IN COMPUTER APPLICATION
                          </p>
                          <p>POORNIMA UNIVERSITY,JAIPUR</p>
                        </div>
                        <div className="fw-bolder ">2022-2024 [Present]</div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
