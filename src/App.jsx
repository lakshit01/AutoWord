import React, { useState } from "react";
import "./App.css"

function COIForm() {

  const [PlTypeSelectedOption, SetPlTypeSelectedOption] = useState(null);

  const [selectedOption, setSelectedOption] = useState('');
  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value);
  };
  
  // Liab AI Hooks
  const [isCheckedAIGL, setIsCheckedAIGL] = useState(false);
  const [isCheckedAIAL, setIsCheckedAIAL] = useState(false);
  const [isCheckedAIUMB, setIsCheckedAIUMB] = useState(false);


  // Liab WOS Hooks
  const [isCheckedWOSGL, setIsCheckedWOSGL] = useState(false);
  const [isCheckedWOSAL, setIsCheckedWOSAL] = useState(false);
  const [isCheckedWOSUMB, setIsCheckedWOSUMB] = useState(false);
  const [isCheckedWOSWC, setIsCheckedWOSWC] = useState(false);


  // Liab PNC Hooks
  const [PNCselectedOption, setPNCselectedOption] = useState(null);
  const [isCheckedPNCGL, setIsCheckedPNCGL] = useState(false);
  const [isCheckedPNCAL, setIsCheckedPNCAL] = useState(false);
  const [isCheckedPNCUMB, setIsCheckedPNCUMB] = useState(false);


  // Liab Cancellation Hooks
  const [isCheckedCANGL, setIsCheckedCANGL] = useState(false);
  const [isCheckedCANAL, setIsCheckedCANAL] = useState(false);
  const [isCheckedCANUMB, setIsCheckedCANUMB] = useState(false);
  const [isCheckedCANWC, setIsCheckedCANWC] = useState(false);


  // Liab Loss Payee Hooks
  const [isCheckedLPAL, setIsCheckedLPAL] = useState(false);

  // Property Hooks
  const [isCheckedAIProp, setIsCheckedAIProp] = useState(false);
  const [isCheckedWOSProp, setIsCheckedWOSProp] = useState(false);
  const [isCheckedLPProp, setIsCheckedLPProp] = useState(false);
  const [isCheckedMORProp, setIsCheckedMORProp] = useState(false);
  const [isCheckedCANProp, setIsCheckedCANProp] = useState(false);

  // This is to set wording in textarea tag
  const [coiText, setCoiText] = useState("");


  // Event to check whether liability or property box is checked
  const handlePlTypeOptionChange = (event) => {

    SetPlTypeSelectedOption(event.target.value);
  };

  //Liab AI Events
  const handleCheckboxAIGLChange = (event) => {
    setIsCheckedAIGL(event.target.checked);
  };

  const handleCheckboxAIALChange = (event) => {
    setIsCheckedAIAL(event.target.checked);
  };

  const handleCheckboxAIUMBChange = (event) => {
    setIsCheckedAIUMB(event.target.checked);
  };


  //Liab WOS Events
  const handleCheckboxWOSGLChange = (event) => {
    setIsCheckedWOSGL(event.target.checked);
  };

  const handleCheckboxWOSALChange = (event) => {
    setIsCheckedWOSAL(event.target.checked);
  };

  const handleCheckboxWOSUMBChange = (event) => {
    setIsCheckedWOSUMB(event.target.checked);
  };

  const handleCheckboxWOSWCChange = (event) => {
    setIsCheckedWOSWC(event.target.checked);
  };


  //Liab PNC Events
  const handlePNCOptionChange = (event) => {
    setPNCselectedOption(event.target.value);
  };

  const handleCheckboxPNCGLChange = (event) => {
    setIsCheckedPNCGL(event.target.checked);
  };

  const handleCheckboxPNCALChange = (event) => {
    setIsCheckedPNCAL(event.target.checked);
  };

  const handleCheckboxPNCUMBChange = (event) => {
    setIsCheckedPNCUMB(event.target.checked);
  };


  //Liab Cancellation Events
  const handleCheckboxCANGLChange = (event) => {
    setIsCheckedCANGL(event.target.checked);
  };

  const handleCheckboxCANALChange = (event) => {
    setIsCheckedCANAL(event.target.checked);
  };

  const handleCheckboxCANUMBChange = (event) => {
    setIsCheckedCANUMB(event.target.checked);
  };

  const handleCheckboxCANWCChange = (event) => {
    setIsCheckedCANWC(event.target.checked);
  };


  //Liab Loss Payee Events
  const handleCheckboxLPALChange = (event) => {
    setIsCheckedLPAL(event.target.checked);
  };

  // Property Events
  const handleCheckboxAIPropChange = (event) => {
    setIsCheckedAIProp(event.target.checked);
  };

  const handleCheckboxWOSPropChange = (event) => {
    setIsCheckedWOSProp(event.target.checked);
  };

  const handleCheckboxLPPropChange = (event) => {
    setIsCheckedLPProp(event.target.checked);
  };

  const handleCheckboxMORPropChange = (event) => {
    setIsCheckedMORProp(event.target.checked);
  };

  const handleCheckboxCANPropChange = (event) => {
    setIsCheckedCANProp(event.target.checked);
  };

  const generateCOI = () => {

    let REtext = `${document.getElementById("REpart").value}`;
    let entities = `${document.getElementById("entities").value}`;
    let policyText = `${document.getElementById("policyWord").value}`;
    let dropdown = `${document.getElementById("dropdown").value}`;

    let REWording = "";
    if (REtext === "") {
      REWording = "";
    } else {
      REWording = `RE: ${REtext}.  `;
    };

    let policyWord = "";
    if (policyText === "") {
      policyWord = "";
    } else {
      policyWord = `${policyText}.  `;
    };

    let CH = "";

    if (entities === "") {
      CH = "Certificate Holder";
    } else {
      CH = entities;
    };

    let dropdownWording = "";

    if (entities !== "") {
      if (dropdown === "") {
        dropdownWording = "is";
      } else {
        dropdownWording = "are"
      };
    } else {
      dropdownWording = "is";
    }

    let AIpolicyType = "";
    let WOSpolicyType = "";
    let PNCpolicyType = "";
    let CANpolicyType = "";
    let LPliabPolicyType = "";

    let PropWording = "";

    if (PlTypeSelectedOption === "liability") {
      // AI Wording
      if (isCheckedAIGL && isCheckedAIAL && isCheckedAIUMB) {
        AIpolicyType = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the General Liability, Automobile Liability and Umbrella Liability policies.  `;
      } else if (isCheckedAIGL && isCheckedAIAL) {
        AIpolicyType = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the General Liability and Automobile Liability policies.  `;
      } else if (isCheckedAIGL && isCheckedAIUMB) {
        AIpolicyType = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the General Liability and Umbrella Liability policies.  `;
      } else if (isCheckedAIAL && isCheckedAIUMB) {
        AIpolicyType = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Automobile Liability and Umbrella Liability policies.  `;
      } else if (isCheckedAIGL) {
        AIpolicyType = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the General Liability policy.  `;
      } else if (isCheckedAIAL) {
        AIpolicyType = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Automobile Liability policy.  `;
      } else if (isCheckedAIUMB) {
        AIpolicyType = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Umbrella Liability policy.  `;
      } else {
        AIpolicyType = "";
      }


      // WOS Wording
      if (isCheckedWOSGL && isCheckedWOSAL && isCheckedWOSUMB && isCheckedWOSWC) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the General Liability, Automobile Liability, Umbrella Liability and Workers' Compensation policies.  `;
      } else if (isCheckedWOSGL && isCheckedWOSAL && isCheckedWOSUMB) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the General Liability, Automobile Liability and Umbrella Liability policies.  `;
      } else if (isCheckedWOSGL && isCheckedWOSAL && isCheckedWOSWC) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the General Liability, Automobile Liability and Workers' Compensation policies.  `;
      } else if (isCheckedWOSGL && isCheckedWOSUMB && isCheckedWOSWC) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the General Liability, Umbrella Liability and Workers' Compensation policies.  `;
      } else if (isCheckedWOSAL && isCheckedWOSUMB && isCheckedWOSWC) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Automobile Liability, Umbrella Liability and Workers' Compensation policies.  `;
      } else if (isCheckedWOSGL && isCheckedWOSAL) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the General Liability and Automobile Liability policies.  `;
      } else if (isCheckedWOSGL && isCheckedWOSUMB) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the General Liability and Umbrella Liability policies.  `;
      } else if (isCheckedWOSGL && isCheckedWOSWC) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the General Liability and Workers' Compensation policies.  `;
      } else if (isCheckedWOSAL && isCheckedWOSUMB) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Automobile Liability and Umbrella Liability policies.  `;
      } else if (isCheckedWOSAL && isCheckedWOSWC) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Automobile Liability and Workers' Compensation policies.  `;
      } else if (isCheckedWOSUMB && isCheckedWOSWC) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Umbrella Liability and Workers' Compensation policies.  `;
      } else if (isCheckedWOSGL) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the General Liability policy.  `;
      } else if (isCheckedWOSAL) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Automobile Liability policy.  `;
      } else if (isCheckedWOSUMB) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Umbrella Liability policy.  `;
      } else if (isCheckedWOSWC) {
        WOSpolicyType = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Workers' Compensation policy.  `;
      } else {
        WOSpolicyType = "";
      };


      // PNC Wording
      if (PNCselectedOption === "primary") {
        if (isCheckedPNCGL && isCheckedPNCAL && isCheckedPNCUMB) {
          PNCpolicyType = "General Liability, Automobile Liability and Umbrella Liability policies evidenced herein are Primary to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCGL && isCheckedPNCAL ) {
          PNCpolicyType = "General Liability and Automobile Liability policies evidenced herein are Primary to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCGL && isCheckedPNCUMB ) {
          PNCpolicyType = "General Liability and Umbrella Liability policies evidenced herein are Primary to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCAL && isCheckedPNCUMB) {
          PNCpolicyType = "Automobile Liability and Umbrella Liability policies evidenced herein are Primary to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCGL) {
          PNCpolicyType = "General Liability policy evidenced herein is Primary to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCAL) {
          PNCpolicyType = "Automobile Liability policy evidenced herein is Primary to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCUMB) {
          PNCpolicyType = "Umbrella Liability policy evidenced herein is Primary to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else {
          PNCpolicyType = "";
        };
      };

      if (PNCselectedOption === "non-contributory") {
        if (isCheckedPNCGL && isCheckedPNCAL && isCheckedPNCUMB) {
          PNCpolicyType = "General Liability, Automobile Liability and Umbrella Liability policies evidenced herein are Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCGL && isCheckedPNCAL) {
          PNCpolicyType = "General Liability and Automobile Liability policies evidenced herein are Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCGL && isCheckedPNCUMB) {
          PNCpolicyType = "General Liability and Umbrella Liability policies evidenced herein are Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCAL && isCheckedPNCUMB) {
          PNCpolicyType = "Automobile Liability and Umbrella Liability policies evidenced herein are Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCGL) {
          PNCpolicyType = "General Liability policy evidenced herein is Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCAL) {
          PNCpolicyType = "Automobile Liability policy evidenced herein is Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCUMB) {
          PNCpolicyType = "Umbrella Liability policy evidenced herein is Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else {
          PNCpolicyType = "";
        };
      };

      if (PNCselectedOption === "both") {
        if (isCheckedPNCGL && isCheckedPNCAL && isCheckedPNCUMB) {
          PNCpolicyType = "General Liability, Automobile Liability and Umbrella Liability policies evidenced herein are Primary and Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCGL && isCheckedPNCAL) {
          PNCpolicyType = "General Liability and Automobile Liability policies evidenced herein are Primary and Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCGL && isCheckedPNCUMB) {
          PNCpolicyType = "General Liability and Umbrella Liability policies evidenced herein are Primary and Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCAL && isCheckedPNCUMB) {
          PNCpolicyType = "Automobile Liability and Umbrella Liability policies evidenced herein are Primary and Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCGL) {
          PNCpolicyType = "General Liability policy evidenced herein is Primary and Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCAL) {
          PNCpolicyType = "Automobile Liability policy evidenced herein is Primary and Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else if (isCheckedPNCUMB) {
          PNCpolicyType = "Umbrella Liability policy evidenced herein is Primary and Non-Contributory to other insurance available to Additional Insured, but only in accordance with the policy's provisions.  ";
        } else {
          PNCpolicyType = "";
        };
      };


      // Cancellation Wording
      if (isCheckedCANGL && isCheckedCANAL && isCheckedCANUMB && isCheckedCANWC) {
        CANpolicyType = "Should General Liability, Automobile Liability, Umbrella Liability and Workers' Compensation policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANGL && isCheckedCANAL && isCheckedCANUMB) {
        CANpolicyType = "Should General Liability, Automobile Liability and Umbrella Liability policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANGL && isCheckedCANAL && isCheckedCANWC) {
        CANpolicyType = "Should General Liability, Automobile Liability and Workers' Compensation policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANGL && isCheckedCANUMB && isCheckedCANWC) {
        CANpolicyType = "Should General Liability, Umbrella Liability and Workers' Compensation policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANAL && isCheckedCANUMB && isCheckedCANWC) {
        CANpolicyType = "Should Automobile Liability, Umbrella Liability and Workers' Compensation policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANGL && isCheckedCANAL) {
        CANpolicyType = "Should General Liability and Automobile Liability policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANGL && isCheckedCANUMB) {
        CANpolicyType = "Should General Liability and Umbrella Liability policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANGL && isCheckedCANWC) {
        CANpolicyType = "Should General Liability and Workers' Compensation policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANAL && isCheckedCANUMB) {
        CANpolicyType = "Should Automobile Liability and Umbrella Liability policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANAL && isCheckedCANWC) {
        CANpolicyType = "Should Automobile Liability and Workers' Compensation policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANUMB && isCheckedCANWC) {
        CANpolicyType = "Should Umbrella Liability and Workers' Compensation policies be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of each policy.  ";
      } else if (isCheckedCANGL) {
        CANpolicyType = "Should General Liability policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.  ";
      } else if (isCheckedCANAL) {
        CANpolicyType = "Should Automobile Liability policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.  ";
      } else if (isCheckedCANUMB) {
        CANpolicyType = "Should Umbrella Liability policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.  ";
      } else if (isCheckedCANWC) {
        CANpolicyType = "Should Workers' Compensation policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.  ";
      } else {
        CANpolicyType = "";
      };


      // LOSS PAYEE WORDING ON AUTO
      if (isCheckedLPAL) {
        LPliabPolicyType = `${CH} ${dropdownWording} included as Loss Payee with respect to the physical damage Auto policy of covered vehicles by the Named Insured in accordance with the policy provisions.  `;
      } else {
        LPliabPolicyType = "";
      };
    } else {

      // Property Wording
      if (isCheckedAIProp && isCheckedWOSProp && isCheckedLPProp && isCheckedMORProp && isCheckedCANProp) {
        PropWording = `${CH} Holder ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee and Mortgagee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedAIProp && isCheckedWOSProp && isCheckedLPProp && isCheckedMORProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee and Mortgagee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedAIProp && isCheckedWOSProp && isCheckedLPProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedAIProp && isCheckedWOSProp && isCheckedMORProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedAIProp && isCheckedLPProp && isCheckedMORProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee and Mortgagee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedWOSProp && isCheckedLPProp && isCheckedMORProp && isCheckedCANProp) {
        PropWording = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee and Mortgagee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedAIProp && isCheckedWOSProp && isCheckedLPProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedAIProp && isCheckedWOSProp && isCheckedMORProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Mortgagee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedAIProp && isCheckedWOSProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedAIProp && isCheckedLPProp && isCheckedMORProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee and Mortgagee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedAIProp && isCheckedLPProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedAIProp && isCheckedMORProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Mortgagee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedWOSProp && isCheckedLPProp && isCheckedMORProp) {
        PropWording = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee and Mortgagee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedWOSProp && isCheckedLPProp && isCheckedCANProp) {
        PropWording = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedWOSProp && isCheckedMORProp && isCheckedCANProp) {
        PropWording = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Mortgagee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedLPProp && isCheckedMORProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Loss Payee and Mortgagee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedAIProp && isCheckedWOSProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedAIProp && isCheckedLPProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedAIProp && isCheckedMORProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Mortgagee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedAIProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedWOSProp && isCheckedLPProp) {
        PropWording = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Loss Payee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedWOSProp && isCheckedMORProp) {
        PropWording = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  ${CH} ${dropdownWording} included as Mortgagee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedWOSProp && isCheckedCANProp) {
        PropWording = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedLPProp && isCheckedMORProp) {
        PropWording = `${CH} ${dropdownWording} included as Loss Payee and Mortgagee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedLPProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Loss Payee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedMORProp && isCheckedCANProp) {
        PropWording = `${CH} ${dropdownWording} included as Mortgagee in accordance with the policy provisions of the Property policy.  Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.`;
      } else if (isCheckedAIProp) {
        PropWording = `${CH} ${dropdownWording} included as Additional Insured in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedWOSProp) {
        PropWording = `A Waiver of Subrogation is granted in favor of ${CH} in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedLPProp) {
        PropWording = `${CH} ${dropdownWording} included as Loss Payee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedMORProp) {
        PropWording = `${CH} ${dropdownWording} included as Mortgagee in accordance with the policy provisions of the Property policy.`;
      } else if (isCheckedCANProp) {
        PropWording = "Should Property policy be cancelled before the expiration date thereof, the policy provisions of each policy will govern how notice of cancellation may be delivered to certificate holders in accordance with the policy provisions of policy.";
      } else {
        PropWording = "";
      };
    };


    const coiText = `${policyWord}${REWording}${AIpolicyType}${PNCpolicyType}${WOSpolicyType}${CANpolicyType}${LPliabPolicyType}${PropWording}`;

    setCoiText(coiText);

    setPNCselectedOption(null);
  };

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(coiText);
  };

  const clearPolWord = () => {
    document.getElementById("REpart").value = "";
    document.getElementById("entities").value = "";
    document.getElementById("policyWord").value = "";
  };

  const clearAll = () => {

    clearPolWord();
    SetPlTypeSelectedOption(null);

    setIsCheckedAIGL(null);
    setIsCheckedAIAL(null);
    setIsCheckedAIUMB(null);
    setIsCheckedWOSGL(null);
    setIsCheckedWOSAL(null);
    setIsCheckedWOSUMB(null);
    setIsCheckedWOSWC(null);
    setPNCselectedOption(null);
    setIsCheckedPNCGL(null);
    setIsCheckedPNCAL(null);
    setIsCheckedPNCUMB(null);
    setIsCheckedCANGL(null);
    setIsCheckedCANAL(null);
    setIsCheckedCANUMB(null);
    setIsCheckedCANWC(null);
    setIsCheckedLPAL(null);
    setIsCheckedAIProp(null);
    setIsCheckedWOSProp(null);
    setIsCheckedLPProp(null);
    setIsCheckedMORProp(null);
    setIsCheckedCANProp(null);
    setSelectedOption(null);
  };

  const handleTextareaChange = (event) => {
    setCoiText(event.target.value);
  };

  return (
    <div className="main">
      <fieldset id="speWordField" className="fieldParent">

        <legend>Special Wording</legend>

        <div className="speWord1st">
          <div className="speWordChild">
            <div>RE :</div>
            <input type="text" id="REpart" className="speWordText" placeholder="Enter RE part here"></input>
          </div>

          <div className="speWordChild">
            <div>Entities :</div>
            <input type="text" id="entities" className="speWordText" placeholder="Enter Entities for AI and WOS"></input>
            
          </div>

          <div className="speWordChild">
            <div>Policy Wording :</div>
            <input type="text" id="policyWord" className="speWordText" placeholder="Enter Policy Wording"></input>
          </div>
        </div>

        <div className="speWord2st">
        
            <div className="dropdown">
             <div>If Multiple:</div>
             <div >
              <select value={selectedOption} onChange={handleChangeOption} className="dropdownValue" id="dropdown">
                <option></option>
                <option value="option2">are</option>
              </select>
             </div>
            </div>
          
          <button className="btn" id="speWordClearBtn" onClick={clearPolWord}>Clear All</button>
          
        </div>

      </fieldset>

      <fieldset id="liabField" className="fieldParent">
        <legend>
          <label>
            <input
              type="radio"
              value="liability"
              checked={PlTypeSelectedOption === "liability"}
              onChange={handlePlTypeOptionChange}
            />
            Liability
          </label>
        </legend>

        {/* This is for AI Wording */}
        <fieldset className="fieldChild">
          <legend>Additional Insured:</legend>
          <div>
            <input
              type="checkbox"
              id="aigl-checkbox"
              checked={isCheckedAIGL}
              onChange={handleCheckboxAIGLChange}
            />
            <label htmlFor="aigl-checkbox">General Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="aial-checkbox"
              checked={isCheckedAIAL}
              onChange={handleCheckboxAIALChange}
            />
            <label htmlFor="aial-checkbox">Automobile Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="aiumb-checkbox"
              checked={isCheckedAIUMB}
              onChange={handleCheckboxAIUMBChange}
            />
            <label htmlFor="aiumb-checkbox">Umbrella Liability</label>
          </div>
        </fieldset>

        {/* This is for WOS Wording */}
        <fieldset className="fieldChild">
          <legend>Waiver of Subrogation:</legend>
          <div>
            <input
              type="checkbox"
              id="wosgl-checkbox"
              checked={isCheckedWOSGL}
              onChange={handleCheckboxWOSGLChange}
            />
            <label htmlFor="wosgl-checkbox">General Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="wosal-checkbox"
              checked={isCheckedWOSAL}
              onChange={handleCheckboxWOSALChange}
            />
            <label htmlFor="wosal-checkbox">Automobile Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="wosumb-checkbox"
              checked={isCheckedWOSUMB}
              onChange={handleCheckboxWOSUMBChange}
            />
            <label htmlFor="wosumb-checkbox">Umbrella Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="woswc-checkbox"
              checked={isCheckedWOSWC}
              onChange={handleCheckboxWOSWCChange}
            />
            <label htmlFor="woswc-checkbox">Worker Compensation Liability</label>
          </div>
        </fieldset>

        {/* This is for PNC Wording */}
        <fieldset className="fieldChild">
          <legend>
            <label>
              <input
                type="radio"
                value="primary"
                checked={PNCselectedOption === "primary"}
                onChange={handlePNCOptionChange}
              />
              Primary
            </label>
            <label>
              <input
                type="radio"
                value="non-contributory"
                checked={PNCselectedOption === "non-contributory"}
                onChange={handlePNCOptionChange}
              />
              Non-Contributory
            </label>
            <label>
              <input
                type="radio"
                value="both"
                checked={PNCselectedOption === "both"}
                onChange={handlePNCOptionChange}
              />
              Both
            </label>
          </legend>
          <div>
            <input
              type="checkbox"
              id="pncgl-checkbox"
              checked={isCheckedPNCGL}
              onChange={handleCheckboxPNCGLChange}
            />
            <label htmlFor="pncgl-checkbox">General Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pncal-checkbox"
              checked={isCheckedPNCAL}
              onChange={handleCheckboxPNCALChange}
            />
            <label htmlFor="pncal-checkbox">Automobile Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pncumb-checkbox"
              checked={isCheckedPNCUMB}
              onChange={handleCheckboxPNCUMBChange}
            />
            <label htmlFor="pncumb-checkbox">Umbrella Liability</label>
          </div>
          
        </fieldset>

        {/* This is for Cancellation Wording */}
        <fieldset className="fieldChild">
          <legend>Cancellation:</legend>
          <div>
            <input
              type="checkbox"
              id="cangl-checkbox"
              checked={isCheckedCANGL}
              onChange={handleCheckboxCANGLChange}
            />
            <label htmlFor="cangl-checkbox">General Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="canal-checkbox"
              checked={isCheckedCANAL}
              onChange={handleCheckboxCANALChange}
            />
            <label htmlFor="canal-checkbox">Automobile Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="canumb-checkbox"
              checked={isCheckedCANUMB}
              onChange={handleCheckboxCANUMBChange}
            />
            <label htmlFor="canumb-checkbox">Umbrella Liability</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="canwc-checkbox"
              checked={isCheckedCANWC}
              onChange={handleCheckboxCANWCChange}
            />
            <label htmlFor="canwc-checkbox">Worker Compensation Liability</label>
          </div>
        </fieldset>

        {/* This is for Loss Payee Wording */}
        <fieldset className="fieldChild">
          <legend>Loss Payee:</legend>
          <div>
            <input
              type="checkbox"
              id="lpal-checkbox"
              checked={isCheckedLPAL}
              onChange={handleCheckboxLPALChange}
            />
            <label htmlFor="lpal-checkbox">Automobile Liability</label>
          </div>
        </fieldset>
      </fieldset>

      <fieldset id="propField" className="fieldParent">
        <legend>
          <label>
            <input
              type="radio"
              value="property"
              checked={PlTypeSelectedOption === "property"}
              onChange={handlePlTypeOptionChange}
            />
            Property
          </label>
        </legend>

        {/* This is for Property Wording */}
        <fieldset className="fieldChild">
          <legend>Select Wording</legend>

          {/* Additional Insured */}
          <div>
            <input
              type="checkbox"
              id="aiprop-checkbox"
              checked={isCheckedAIProp}
              onChange={handleCheckboxAIPropChange}
            />
            <label htmlFor="aiprop-checkbox">Additional Insured</label>
          </div>

          {/* Waiver of Subrogation */}
          <div>
            <input
              type="checkbox"
              id="wosprop-checkbox"
              checked={isCheckedWOSProp}
              onChange={handleCheckboxWOSPropChange}
            />
            <label htmlFor="wosprop-checkbox">Waiver of Subrogation</label>
          </div>

          {/* Loss Payee */}
          <div>
            <input
              type="checkbox"
              id="lpprop-checkbox"
              checked={isCheckedLPProp}
              onChange={handleCheckboxLPPropChange}
            />
            <label htmlFor="lpprop-checkbox">Loss Payee</label>
          </div>

          {/* Mortagee */}
          <div>
            <input
              type="checkbox"
              id="morprop-checkbox"
              checked={isCheckedMORProp}
              onChange={handleCheckboxMORPropChange}
            />
            <label htmlFor="morprop-checkbox">Mortagee</label>
          </div>

          {/* Cancellation */}
          <div>
            <input
              type="checkbox"
              id="canprop-checkbox"
              checked={isCheckedCANProp}
              onChange={handleCheckboxCANPropChange}
            />
            <label htmlFor="canprop-checkbox">Cancellation</label>
          </div>
        </fieldset>
      </fieldset>

      <div className="btns">
        <button className="btn middle" onClick={generateCOI}>Generate Wording</button>
        <button className="btn middle" onClick={clearAll}>Reset</button>
      </div>

      {coiText && (
        <div className="wording">
          <textarea value={coiText} id="textWord" rows="4" cols="200" onChange={handleTextareaChange} />
          <button className="btn copybtn" onClick={handleCopyButtonClick}>Copy</button>

        </div>
      )}
    </div>
  );
};

export default COIForm;
