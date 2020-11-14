import "../App.css";

const Field = (props) => {
  const {
    htmlTag,
    id,
    className,
    personalPreviousEdit,
    personalInfo,
    personalEditChange,
    personalEditMode,
  } = props;

  const CustomTag = `${htmlTag}`;

  return (
    <>
      {!personalInfo[id][1] ? (
        <CustomTag
          className={className}
          id={id}
          onClick={(e) => {
            personalEditMode(e, personalPreviousEdit);
          }}
        >
          {personalInfo[id][0]}
        </CustomTag>
      ) : (
        <input
          id={id}
          value={personalInfo[id][0]}
          autoFocus="true"
          onChange={(e) => {
            personalEditChange(e);
          }}
          onFocus={(e) => {
            e.target.select();
          }}
        ></input>
      )}
    </>
  );
};

const Personal = (props) => {
  const {
    personalPreviousEdit,
    personalInfo,
    personalEditMode,
    personalEditChange,
  } = props;

  return (
    <div className="ui grid personalBody">
      <div className="name left floated left aligned seven wide column">
        <div>
          <Field
            htmlTag="h1"
            id="firstName"
            className="ui huge header"
            personalPreviousEdit={personalPreviousEdit}
            personalInfo={personalInfo}
            personalEditMode={personalEditMode}
            personalEditChange={personalEditChange}
          />
        </div>
        <div>
          <Field
            htmlTag="h1"
            id="lastName"
            className="ui huge header"
            personalPreviousEdit={personalPreviousEdit}
            personalInfo={personalInfo}
            personalEditMode={personalEditMode}
            personalEditChange={personalEditChange}
          />
        </div>
        <div>
          <Field
            htmlTag="p"
            id="currentRole"
            className="role"
            personalPreviousEdit={personalPreviousEdit}
            personalInfo={personalInfo}
            personalEditMode={personalEditMode}
            personalEditChange={personalEditChange}
          />
        </div>
      </div>
      <div className="right floated right aligned six wide column pdetails">
        <div>
          <Field
            htmlTag="p"
            id="address1"
            className="address"
            personalPreviousEdit={personalPreviousEdit}
            personalInfo={personalInfo}
            personalEditMode={personalEditMode}
            personalEditChange={personalEditChange}
          />
        </div>
        <div>
          <Field
            htmlTag="p"
            id="address2"
            className="address"
            personalPreviousEdit={personalPreviousEdit}
            personalInfo={personalInfo}
            personalEditMode={personalEditMode}
            personalEditChange={personalEditChange}
          />
        </div>
        <div>
          <i className="phone icon"></i>
          <Field
            htmlTag="span"
            id="phone"
            personalPreviousEdit={personalPreviousEdit}
            personalInfo={personalInfo}
            personalEditMode={personalEditMode}
            personalEditChange={personalEditChange}
          />
        </div>
        <div>
          <i className="mail icon"></i>
          <Field
            htmlTag="span"
            id="email"
            personalPreviousEdit={personalPreviousEdit}
            personalInfo={personalInfo}
            personalEditMode={personalEditMode}
            personalEditChange={personalEditChange}
          />
        </div>
        <div>
          <i className="linkedin icon"></i>
          <Field
            htmlTag="span"
            id="linkedin"
            personalPreviousEdit={personalPreviousEdit}
            personalInfo={personalInfo}
            personalEditMode={personalEditMode}
            personalEditChange={personalEditChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
