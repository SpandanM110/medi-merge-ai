import React from "react";

const Navbar = () => {
  let isArrayFunction = (inputArray) => {
    if (Array.isArray(inputArray) && inputArray.length !== 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div id="Navbar">
      <div class="usa-overlay"></div>
      <header class="usa-header usa-header--basic usa-header--megamenu padding-bottom-4 padding-top-6">
        <div class="usa-nav-container">
          <div class="usa-navbar">
            <div class="usa-logo margin-0" id="basic-mega-logo">
              <em class="usa-logo__text">
                <h3 className="display-inline-block padding-left-1">MediMerge Symptom Checker</h3>
              </em>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
