import moment from "moment";

import DateUtils from "@date-io/moment";
import "moment/locale/th";

function OverwriteMomentBE({ locale, formats, instance }) {
  const date = (value = null) => {
    if (value === null) {
      return null;
    }
    const momentObj = moment(value);
    momentObj.locale(locale);
    return momentObj;
  };

  const toBuddhistYear = (momentObj, format) => {
    const christianYear = momentObj.format("YYYY");
    const buddhishYear = (parseInt(christianYear) + 543).toString();
    return momentObj
      .format(
        format
          .replace("YYYY", buddhishYear)
          .replace("YY", buddhishYear.substring(2, 4))
      )
      .replace(christianYear, buddhishYear);
  };

  const format = (dateObj, formatKey) => {
    return toBuddhistYear(dateObj, formatKey);
  };

  return null; // Replace with the desired JSX for the functional component
}

export default OverwriteMomentBE;
