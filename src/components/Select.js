import React, {useRef, useState} from 'react'

const Select = () => {

  const ref = useRef();

  let numOfOptionBeforeToLoadNextSet = 2;
  let lastScrollTop = 0;
  let currentScroll = 0;

  const [direction, setDirection] = useState();
  const [scrollTop, setScrollTop] = useState();
  const [totalHeight, setTotalHeight] = useState();
  const [currentPageNo, setCurrentPageNo] = useState(1);

  const [options, setOptions] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  function OnSelectScroll(event) {
    const selectObj = event.target;
    let singleOptionHeight = selectObj[0].offsetHeight;
    let selectBoxHeight = selectObj.offsetHeight;
    let st = selectObj.scrollTop;
    let totalHeightTmp = options.length * singleOptionHeight;
    if (st > lastScrollTop) {
      // downScroll code
      setDirection("downScroll");
      currentScroll = st + selectBoxHeight;
      setScrollTop(currentScroll);
      setTotalHeight(totalHeightTmp);

      if ((currentScroll + (numOfOptionBeforeToLoadNextSet * singleOptionHeight)) >= totalHeightTmp) {
        setCurrentPageNo(currentPageNo + 1);
        LoadNextSetOfOptions(currentPageNo + 1, selectObj);
      }

    } else {
      // upScroll code
      setDirection("upScroll");
    }
    lastScrollTop = st;
  }

  function LoadNextSetOfOptions(pageNo, selectObj) {
    //here we can have ajax call to fetch options from server.
    //for demo purpose we will have simple for loop
    //assuming pageNo starts with 1
    let selectBoxHeight = selectObj.offsetHeight;
    let startOption = ((pageNo - 1) * 10) + 1; //for example if pageNo is 2 then startOption = (2-1)*10 + 1 = 11
    let endOption = startOption + 10; //for example if pageNo is 2 then endOption = 11 + 10 = 21

    let tmp = [];
    for (let i = startOption; i < endOption; i++) {
      tmp.push(i);
    }

    setOptions([...options, ...tmp]);

    selectObj.scrollTop  = currentScroll - (selectBoxHeight);

  }

  return (
    <div>
      <p>Infinite scroll for select box</p>
      <select ref={ref} size="5" className="form-control" onScroll={OnSelectScroll}>
        {options.map((option, index) => (
          <option key={index} onScroll={OnSelectScroll}>{option}</option>
        ))}
      </select>

      <p>Direction: {direction}</p>

      <p>scrollTop: {scrollTop}</p>

      <p>totalHeight: {totalHeight}</p>
    </div>
  )
};

export default Select