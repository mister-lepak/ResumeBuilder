const SkillsItem = (props) => {
  const { itemStor, itemAddStatus, deleteInputVal, previewModeStatus } = props;
  return (
    <div className="ui grid">
      {itemAddStatus ? (
        <></>
      ) : (
        itemStor.map((el, index) => {
          return (
            <>
              <div className="contentItem three wide column">
                <p className="roleItem">{el}</p>
              </div>
              {previewModeStatus ? (
                <></>
              ) : (
                <div className="one wide column">
                  <button className="ui icon button">
                    <i
                      className="delete icon"
                      onClick={(e) => deleteInputVal(e, "skills", index)}
                    ></i>
                  </button>
                </div>
              )}
            </>
          );
        })
      )}
    </div>
  );
};

const SkillsAdd = (props) => {
  const {
    itemAddStatus,
    addItemMode,
    updateInputVal,
    cancelInput,
    submitItem,
    previewModeStatus,
  } = props;

  if (itemAddStatus) {
    return (
      <>
        <form
          className="ui form"
          onSubmit={(e) => {
            submitItem(e, "skills");
          }}
        >
          <div className="field">
            <label>Skills</label>
            <input
              type="text"
              name="Skills"
              id="skills"
              placeholder="Shine your top 5 skills here!"
              onChange={(e) => {
                updateInputVal(e, "skills", "expertInp", 0);
              }}
            ></input>
          </div>
          <button
            className="ui button"
            onClick={(e) => {
              cancelInput(e, "skills");
            }}
          >
            Cancel
          </button>
          <button className="ui button" type="submit">
            + Skill
          </button>
        </form>
      </>
    );
  } else {
    return (
      <>
        {previewModeStatus ? (
          <></>
        ) : (
          <button
            className="ui button"
            onClick={(e) => addItemMode(e, "skills")}
          >
            + Skills
          </button>
        )}
      </>
    );
  }
};

const Expertise = (props) => {
  const {
    expertStor,
    skillsAdd,
    addItemMode,
    updateInputVal,
    cancelInput,
    submitItem,
    deleteInputVal,
    previewModeStatus,
  } = props;
  return (
    <>
      <div className="subContent">
        <div className="sectionHeader ui medium header">SKILLS</div>
        <SkillsItem
          itemStor={expertStor}
          itemAddStatus={skillsAdd}
          deleteInputVal={deleteInputVal}
          previewModeStatus={previewModeStatus}
        />
        <SkillsAdd
          itemAddStatus={skillsAdd}
          addItemMode={addItemMode}
          updateInputVal={updateInputVal}
          cancelInput={cancelInput}
          submitItem={submitItem}
          previewModeStatus={previewModeStatus}
        />
      </div>
    </>
  );
};

export default Expertise;
