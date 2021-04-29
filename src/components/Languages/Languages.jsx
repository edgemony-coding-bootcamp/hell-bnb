import React from "react";
import Language from "./Languages.elements";

function Languages({ lang }) {
  return (
    <div>
      <Language>Offerta in </Language>
      {lang.map((language, index) => {
        const key = `${language}_${index}`;
        return (
          <React.Fragment key={key}>
            <Language> {language.name}</Language>
            {index < lang.length - 1 && <Language>,</Language>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Languages;
