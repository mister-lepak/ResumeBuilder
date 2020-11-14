import React, { Component } from "react";
import Personal from "./components/Personal";
import "./App.css";
import Main from "./components/Main";
import Expertise from "./components/Expertise";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalPreviousEdit: "",
      personalInfo: {
        firstName: ["First Name", false],
        lastName: ["Last Name", false],
        currentRole: ["Current Role", false],
        address1: ["Address 1", false],
        address2: ["Address 2", false],
        phone: ["Phone", false],
        email: ["Email", false],
        linkedin: ["Linkedin", false],
      },
      previewModeStatus: false,
      expStorComp: [],
      expStorCity: [],
      expStorYrFrm: [],
      expStorYrTo: [],
      expStorRole: [],
      expStorRoleDesc: [],
      expInpComp: "",
      expInpCity: "",
      expInpYrFrm: "",
      expInpYrTo: "",
      expInpRole: "",
      expInpRoleDesc: "",
      experienceAdd: false,
      eduStorComp: [],
      eduStorCity: [],
      eduStorYrFrm: [],
      eduStorYrTo: [],
      eduStorRole: [],
      eduStorRoleDesc: [],
      eduInpComp: "",
      eduInpCity: "",
      eduInpYrFrm: "",
      eduInpYrTo: "",
      eduInpRole: "",
      eduInpRoleDesc: "",
      educationAdd: false,
      expertStor: [],
      expertInp: [],
      skillsAdd: false,
    };
    this.workingMode = this.workingMode.bind(this);
    this.previewMode = this.previewMode.bind(this);
    this.personalEditMode = this.personalEditMode.bind(this);
    this.cleanPersonalEditMode = this.cleanPersonalEditMode.bind(this);
    this.personalEditChange = this.personalEditChange.bind(this);
    this.addItemMode = this.addItemMode.bind(this);
    this.cancelInput = this.cancelInput.bind(this);
    this.submitItem = this.submitItem.bind(this);
    this.updateInputVal = this.updateInputVal.bind(this);
    this.deleteInputVal = this.deleteInputVal.bind(this);
  }
  workingMode = (e) => {
    this.setState({ previewModeStatus: false });
    document.querySelector(`button#preview`).classList.remove("positive");
    document.querySelector(`button#work`).classList.add("positive");
  };

  previewMode = (e) => {
    this.setState({ previewModeStatus: true });
    document.querySelector(`button#work`).classList.remove("positive");
    document.querySelector(`button#preview`).classList.add("positive");
  };

  personalEditChange = (e) => {
    let personalInfo = { ...this.state.personalInfo };
    personalInfo[e.target.id][0] = e.target.value;
    this.setState({ personalInfo });
  };

  personalEditMode = (e, previousEdit) => {
    this.cleanPersonalEditMode(e, previousEdit);
    if (!this.state.personalInfo[e.target.id][1]) {
      let personalInfo = { ...this.state.personalInfo };
      personalInfo[e.target.id][1] = true;
      this.setState({
        personalPreviousEdit: e.target.id,
        personalInfo,
      });
    }
  };

  cleanPersonalEditMode = (e, previousEdit) => {
    if (previousEdit == null || previousEdit === "") {
    } else if (previousEdit === e.target.id) {
    } else if (this.state.personalInfo[previousEdit][1]) {
      let personalInfo = { ...this.state.personalInfo };
      personalInfo[previousEdit][1] = false;
      if (
        personalInfo[previousEdit][0] == null ||
        personalInfo[previousEdit][0] === ""
      ) {
        personalInfo[previousEdit][0] = previousEdit;
      }
      this.setState({
        personalPreviousEdit: "",
        personalInfo,
      });
    }
  };

  addItemMode = (e, category) => {
    let key = "";

    if (category === "experience") key = "experienceAdd";
    else if (category === "education") key = "educationAdd";
    else if (category === "skills") key = "skillsAdd";

    this.setState({
      [key]: true,
    });
  };

  cancelInput = (e, category) => {
    let key = "";

    if (category === "experience") key = "experienceAdd";
    else if (category === "education") key = "educationAdd";
    else if (category === "skills") key = "skillsAdd";
    this.setState({ [key]: false });
  };

  submitItem = (e, category) => {
    e.preventDefault();
    let stateKey = [];
    let inpKey = [];
    let addKey = "";
    if (category === "experience") {
      stateKey = [
        "expStorComp",
        "expStorCity",
        "expStorYrTo",
        "expStorYrFrm",
        "expStorRole",
        "expStorRoleDesc",
      ];
      inpKey = [
        "expInpComp",
        "expInpCity",
        "expInpYrTo",
        "expInpYrFrm",
        "expInpRole",
        "expInpRoleDesc",
      ];
      addKey = "experienceAdd";
    } else if (category === "education") {
      stateKey = [
        "eduStorComp",
        "eduStorCity",
        "eduStorYrTo",
        "eduStorYrFrm",
        "eduStorRole",
        "eduStorRoleDesc",
      ];
      inpKey = [
        "eduInpComp",
        "eduInpCity",
        "eduInpYrTo",
        "eduInpYrFrm",
        "eduInpRole",
        "eduInpRoleDesc",
      ];
      addKey = "educationAdd";
    } else if (category === "skills") {
      stateKey = ["expertStor"];
      inpKey = ["expertInp"];
      addKey = "skillsAdd";
    }
    stateKey.map((el, index) => {
      const inpKeyIndex = inpKey[index];

      this.setState({
        [el]: this.state[el].concat(this.state[inpKeyIndex]),
        [addKey]: false,
      });
    });
    console.log(this.state);
  };

  updateInputVal = (e, category, specificState, id) => {
    if (id < 5) {
      const inputs = document.querySelectorAll(`input#${category}`);
      this.setState({
        [specificState]: inputs[id].value,
      });
    } else {
      const textArea = document.querySelector(`textarea#${category}`);
      this.setState({
        [specificState]: textArea.value,
      });
    }
  };

  deleteInputVal = (e, category, id) => {
    let stateKey = [];
    if (category === "experience") {
      stateKey = [
        "expStorComp",
        "expStorCity",
        "expStorYrTo",
        "expStorYrFrm",
        "expStorRole",
        "expStorRoleDesc",
      ];
    } else if (category === "education") {
      stateKey = [
        "eduStorComp",
        "eduStorCity",
        "eduStorYrTo",
        "eduStorYrFrm",
        "eduStorRole",
        "eduStorRoleDesc",
      ];
    } else if (category === "skills") {
      stateKey = ["expertStor"];
    }
    stateKey.map((el1, index1) => {
      this.setState({
        [el1]: this.state[el1].filter((el2, index2) => index2 !== id),
      });
    });
  };

  render() {
    const {
      personalPreviousEdit,
      personalInfo,
      previewModeStatus,
      expStorComp,
      expStorCity,
      expStorYrFrm,
      expStorYrTo,
      expStorRole,
      expStorRoleDesc,
      experienceAdd,
      eduStorComp,
      eduStorCity,
      eduStorYrFrm,
      eduStorYrTo,
      eduStorRole,
      eduStorRoleDesc,
      educationAdd,
      expertStor,
      skillsAdd,
    } = this.state;

    return (
      <>
        <div className="ui grid">
          <div className="row">
            <h2 className="title ui icon header">
              <i className="paper plane icon"></i>
              <div class="content">Resume Builder App</div>
            </h2>
          </div>
          <div className="ui large buttons choices">
            <button
              className="ui button positive"
              id="work"
              onClick={(e) => {
                this.workingMode(e);
              }}
            >
              Working Mode
            </button>
            <div className="or"></div>
            <button
              className="ui button"
              id="preview"
              onClick={(e) => {
                this.previewMode(e);
              }}
            >
              Preview Mode
            </button>
          </div>
        </div>
        <div
          className="mainBody"
          onClick={(e) => {
            this.cleanPersonalEditMode(e, personalPreviousEdit);
          }}
        >
          <Personal
            personalPreviousEdit={personalPreviousEdit}
            personalInfo={personalInfo}
            personalEditMode={this.personalEditMode}
            personalEditChange={this.personalEditChange}
          />
          <Main
            previewModeStatus={previewModeStatus}
            expStorComp={expStorComp}
            expStorCity={expStorCity}
            expStorYrFrm={expStorYrFrm}
            expStorYrTo={expStorYrTo}
            expStorRole={expStorRole}
            expStorRoleDesc={expStorRoleDesc}
            experienceAdd={experienceAdd}
            eduStorComp={eduStorComp}
            eduStorCity={eduStorCity}
            eduStorYrFrm={eduStorYrFrm}
            eduStorYrTo={eduStorYrTo}
            eduStorRole={eduStorRole}
            eduStorRoleDesc={eduStorRoleDesc}
            educationAdd={educationAdd}
            addItemMode={this.addItemMode}
            submitItem={this.submitItem}
            updateInputVal={this.updateInputVal}
            deleteInputVal={this.deleteInputVal}
            cancelInput={this.cancelInput}
          />
          <Expertise
            previewModeStatus={previewModeStatus}
            expertStor={expertStor}
            skillsAdd={skillsAdd}
            addItemMode={this.addItemMode}
            updateInputVal={this.updateInputVal}
            cancelInput={this.cancelInput}
            submitItem={this.submitItem}
            deleteInputVal={this.deleteInputVal}
          />
        </div>
      </>
    );
  }
}

export default App;
