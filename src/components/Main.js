import "../App.css";

const Item = (props) => {
  const {
    category,
    storComp,
    storCity,
    storYrFrm,
    storYrTo,
    storRole,
    storRoleDesc,
    itemAdd,
    deleteInputVal,
    previewModeStatus,
  } = props;

  return (
    <>
      {itemAdd ? (
        <></>
      ) : (
        storComp.map((e, index) => {
          return (
            <div className="ui grid">
              <div className="left floated left aligned five wide column contentTimeline">
                <div>
                  {storComp[index]}, {storCity[index]}
                </div>
                <div>
                  {storYrFrm[index]} - {storYrTo[index]}
                </div>
              </div>
              <div className="right floated left aligned ten wide column">
                <div className="roleItem">{storRole[index]}</div>
                <div>{storRoleDesc[index]}</div>
              </div>
              <div className="one wide column">
                {/* <i className="edit icon"></i> */}
                {previewModeStatus ? (
                  <></>
                ) : (
                  <button className="ui icon button">
                    <i
                      className="delete icon"
                      onClick={(e) => deleteInputVal(e, category, index)}
                    ></i>
                  </button>
                )}
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

const AddItem = (props) => {
  const {
    category,
    categoryAdd,
    addItemMode,
    submitItem,
    updateInputVal,
    cancelInput,
    previewModeStatus,
  } = props;

  let inputKey = [];
  let buttonLabel = "";
  let detailsEntity = "";
  let detailsIdentity = "";

  if (category === "experience") {
    inputKey = [
      "expInpComp",
      "expInpCity",
      "expInpYrTo",
      "expInpYrFrm",
      "expInpRole",
      "expInpRoleDesc",
    ];
    buttonLabel = "Work Experience";
    detailsEntity = "Company";
    detailsIdentity = "Role";
  } else if (category === "education") {
    inputKey = [
      "eduInpComp",
      "eduInpCity",
      "eduInpYrTo",
      "eduInpYrFrm",
      "eduInpRole",
      "eduInpRoleDesc",
    ];
    buttonLabel = "Education";
    detailsEntity = "University or School";
    detailsIdentity = "Degree or Stream";
  }

  return (
    <>
      {categoryAdd ? (
        <form
          className="ui form"
          onSubmit={(e) => {
            submitItem(e, category);
          }}
        >
          <div className="field">
            <label>{detailsEntity} Name</label>
            <input
              type="text"
              name="company"
              id={category}
              placeholder="Company Name"
              onChange={(e) => {
                updateInputVal(e, category, inputKey[0], 0);
              }}
            ></input>
          </div>
          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              id={category}
              placeholder="City"
              onChange={(e) => {
                updateInputVal(e, category, inputKey[1], 1);
              }}
            ></input>
          </div>
          <div className="two fields">
            <div className="field">
              <label>From</label>
              <input
                type="text"
                name="yearFrom"
                id={category}
                placeholder="YYYY"
                onChange={(e) => {
                  updateInputVal(e, category, inputKey[2], 2);
                }}
              ></input>
            </div>
            <div className="field">
              <label>To</label>
              <input
                type="text"
                name="yearTo"
                id={category}
                placeholder="YYYY or Present"
                onChange={(e) => {
                  updateInputVal(e, category, inputKey[3], 3);
                }}
              ></input>
            </div>
          </div>
          <div className="field">
            <label>{detailsIdentity}</label>
            <input
              type="text"
              name="role"
              id={category}
              placeholder="Role"
              onChange={(e) => {
                updateInputVal(e, category, inputKey[4], 4);
              }}
            ></input>
          </div>
          <div className="field">
            <label>Further Descriptions or Achievements</label>
            <textarea
              name="roleDescription"
              id={category}
              placeholder="Keep it short and simple. Maximum 3 sentences"
              onChange={(e) => {
                updateInputVal(e, category, inputKey[5], 5);
              }}
            ></textarea>
          </div>
          <button
            className="ui button"
            onClick={(e) => {
              cancelInput(e, category);
            }}
          >
            Cancel
          </button>
          <button className="ui button" type="submit">
            + {buttonLabel}
          </button>
        </form>
      ) : (
        <>
          {previewModeStatus ? (
            <></>
          ) : (
            <button
              className="ui button"
              onClick={(e) => {
                addItemMode(e, category);
              }}
            >
              + {buttonLabel}
            </button>
          )}
        </>
      )}
    </>
  );
};

const Main = (props) => {
  const {
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
    addItemMode,
    submitItem,
    updateInputVal,
    deleteInputVal,
    cancelInput,
  } = props;

  return (
    <>
      <div className="mainContent">
        <div className="sectionHeader ui medium header">WORK EXPERIENCES</div>
        <Item
          category="experience"
          storComp={expStorComp}
          storCity={expStorCity}
          storYrFrm={expStorYrFrm}
          storYrTo={expStorYrTo}
          storRole={expStorRole}
          storRoleDesc={expStorRoleDesc}
          itemAdd={experienceAdd}
          deleteInputVal={deleteInputVal}
          previewModeStatus={previewModeStatus}
        />
        <AddItem
          category="experience"
          categoryAdd={experienceAdd}
          addItemMode={addItemMode}
          submitItem={submitItem}
          updateInputVal={updateInputVal}
          cancelInput={cancelInput}
          previewModeStatus={previewModeStatus}
        />
      </div>
      <div className="mainContent">
        <div className="sectionHeader ui medium header">EDUCATION</div>
        <Item
          category="education"
          storComp={eduStorComp}
          storCity={eduStorCity}
          storYrFrm={eduStorYrFrm}
          storYrTo={eduStorYrTo}
          storRole={eduStorRole}
          storRoleDesc={eduStorRoleDesc}
          itemAdd={educationAdd}
          deleteInputVal={deleteInputVal}
          previewModeStatus={previewModeStatus}
        />
        <AddItem
          category="education"
          categoryAdd={educationAdd}
          addItemMode={addItemMode}
          submitItem={submitItem}
          updateInputVal={updateInputVal}
          cancelInput={cancelInput}
          previewModeStatus={previewModeStatus}
        />
      </div>
    </>
  );
};

export default Main;
