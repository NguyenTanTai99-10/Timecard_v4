
import React from 'react'
import { Dimensions, Platform, View } from "react-native";
import moment from 'moment'

import DateModel from "./DateModel";
import TimeModel from "./TimeModel";
import Sizes from "./Sizes";
const sizeWindow = Dimensions.get("window");

const formatDate = "YYYY-MM-DDTHH:MM:SS";
const stringIsEmpty = string => {
  if (objectIsNull(string) || string === "") {
    return true;
  } else {
    return false;
  }
};
const objectIsNull = object => {
  if (object === null || object === undefined || object === "(null)") {
    return true;
  } else {
    return false;
  }
};
const arrayIsEmpty = array => {
  if (objectIsNull(array) || array.length === 0) {
    return true;
  } else {
    return false;
  }
};
const getPaddingBonus = () => {
  if (Platform.OS === "ios") {
    if (isIphoneOverX) {
      return 40;
    } else {
      return 10;
    }
  } else {
    return 0;
  }
};

const isIphoneOverX = () => {
  return (
    Platform.OS === "ios" &&
    (isIPhoneXs_X(sizeWindow) ||
      isIPhoneXr_XsMax(sizeWindow) ||
      isIPhone11(sizeWindow))
  );
};

const isIPhone11 = sizeWindow => {
  return sizeWindow.height == 1194 || sizeWindow.width == 1194;
};

const isIPhoneXs_X = sizeWindow => {
  return sizeWindow.height == 812 || sizeWindow.width == 812;
};

const isIPhoneXr_XsMax = sizeWindow => {
  return sizeWindow.height == 896 || sizeWindow.width == 896;
};

const elevationShadowStyle = elevation => {
  if (Platform.OS === "ios") {
    return {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.4,
      shadowRadius: 0.8 * elevation
    };
  } else {
    return {
      elevation
    };
  }
};

const elevationShadowBottomStyle = elevation => {
  if (Platform.OS === "ios") {
    return {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 0.7 * elevation },
      shadowOpacity: 0.3,
      shadowRadius: 0.4 * elevation
    };
  } else {
    return {
      elevation
    };
  }
};
const getCurrentTime = () => {
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  const timeModel = new TimeModel(hours, min, sec);
  return timeModel;
};
const getCurrentDateTime = () => {
  var dayOfWeek = new Date().getDay();
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  const dateModel = new DateModel(
    year,
    month,
    date,
    dayOfWeek,
    hours,
    min,
    sec
  );
  return dateModel;
};
const parseDateTime = (format, dateStr) => {
  (year = 0), (month = 0), (date = 0), (hours = 0), (minute = 0), (second = 0);

  var _listDate = dateStr.split("T", 2);
  var _listFormat = format.split("T", 2);

  const _date = _listDate[0];
  const listFormatDate = _listFormat[0].split("-", 3);
  const listDate = _date.split("-", 3);
  if (listFormatDate.length === 3) {
    for (i = 0; i < listFormatDate.length; i++) {
      if (listFormatDate[i] === "DD") {
        date = listDate[i];
      }
      if (listFormatDate[i] === "MM") {
        month = listDate[i];
      }
      if (listFormatDate[i] === "YYYY") {
        year = listDate[i];
      }
    }
  }
  const _time = _listDate[1].split(".", 2)[0];
  const listTime = _time.split(":", 3);
  const listFormatTime = _listFormat[1].split(":", 3);
  if (listFormatTime.length === 3) {
    for (i = 0; i < listFormatTime.length; i++) {
      if (listFormatTime[i] === "HH") {
        hours = listTime[i];
      }
      if (listFormatTime[i] === "MM") {
        minute = listTime[i];
      }
      if (listFormatTime[i] === "SS") {
        second = listTime[i];
      }
    }
  }
  const dateModel = new DateModel(year, month, date, 0, hours, minute, second);
  return dateModel;
};

const parseTime = time => {
  (hours = 0), (minute = 0), (second = 0);
  var listTime = time.split(":", 2);
  if (!arrayIsEmpty(listTime) && listTime.length >= 2) {
    hours = listTime[0];
    minute = listTime[1];
  }

  return new TimeModel(hours, minute, second);
};
const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const formatStrDate = (date) => {

  let d = new Date(date)
  let day = ('0' + d.getDate()).substr(-2)
  let month = d.getMonth()
  let strMonth = ''
  switch (month) {
    case 0:
      strMonth = 'January'
      break
    case 1:
      strMonth = 'Febuary'
      break
    case 2:
      strMonth = 'March'
      break
    case 3:
      strMonth = 'April'
      break
    case 4:
      strMonth = 'May'
      break
    case 5:
      strMonth = 'June'
      break
    case 6:
      strMonth = 'July'
      break
    case 7:
      strMonth = 'August'
      break
    case 8:
      strMonth = 'September'
      break
    case 9:
      strMonth = 'October'
      break
    case 10:
      strMonth = 'November'
      break
    case 11:
      strMonth = 'December'
      break

    default:
      break

  }
  let year = (d.getFullYear() + '').substr(-2)

  return strMonth + ' ' + day
}
const showLine = () => {
  return (
    <View style={{
      width: '100%',
      height: Sizes.s2,
      backgroundColor: '#f5f5f5',
      // marginVertical: Sizes.s15,
    }} />
  )
}

const convertStrDateTime = (date, type) => {
  // VD: 
  // date: 2020-12-23T10:00:00.000+0000
  // type:
  //    - 1: convert sang December 23
  //    - 999: convert sang dd/MM hh:mm
  //    - 998: convert sang "2 hours ago"
  //    - 997: convert sang "hh:mm:ss DD/MM/YYYY"
  //    - default: return ''
  switch (type) {
    case 1:
      return moment(date).format('MMMM D') + ''
    case 999:
      return moment(date).format('DD/MM hh:mm')

    case 998:
      let d = moment(date).format()
      let chooseDate = new Date(d).getTime()
      let nowDate = new Date().getTime()
      let rangeDate = nowDate - chooseDate

      if (parseInt(rangeDate / (1000 * 60 * 60 * 24)) > 0) {
        return parseInt((rangeDate / (1000 * 60 * 60 * 24))) + ' day ago'
      } else if (parseInt(rangeDate / (1000 * 60 * 60)) > 0) {
        return parseInt(rangeDate / (1000 * 60 * 60)) + ' hours ago'
      } else if (parseInt(rangeDate / (1000 * 60)) > 0) {
        return parseInt(rangeDate / (1000 * 60)) + ' minutes ago'
      } else {
        return parseInt(rangeDate / (1000)) + ' seconds ago'
      }

    case 997:
      return moment(date).format('hh:mm:ss DD/MM/YYYY')
    case 996:
      return moment(date).format('DD-MM-YYYY')
    case 995:
      return moment(date).format('YYYY-MM-DD hh:mm:ss')
    case 888:
      return moment(date).format('DD/MM/YYYY')
    case 887:
      return moment(date).format('DD/MM/YYYY hh:mm')
    case 881:
      let dat = moment(date).format()
      let datTime = new Date(dat).getTime()
      return datTime



    case 443:
      let basicDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 8, 0, 0, 0)
      return basicDate

    case 444:
      let defaultDate = new Date()
      defaultDate.setHours(8)
      defaultDate.setMinutes(0)
      defaultDate.setSeconds(0)
      defaultDate.setMilliseconds(0)
      console.log('default Date: ', defaultDate)
      return defaultDate

    default:
      return ''
  }

}


export {
  getRandomColor,
  parseTime,
  parseDateTime,
  getCurrentDateTime,
  getCurrentTime,
  elevationShadowBottomStyle,
  getPaddingBonus,
  elevationShadowStyle,
  isIphoneOverX,
  formatDate,
  stringIsEmpty,
  arrayIsEmpty,
  objectIsNull,
  formatStrDate,
  showLine,
  convertStrDateTime,
};
