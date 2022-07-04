const { useLayoutEffect, useEffect, useState, useRef } = React;

const App = (params) => {
  const ref = useRef();
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader( 50 );
  const headerClasses = `header ${(sticky && check) ? 'sticky' : ''}`
  const { clientHeight } = ref;
  
  const checkChange = (value) => {
    setCheck(value);
  };
  
  return (
    <div>
      <header ref={ref} className={ headerClasses }>Header</header>
      
      <Switch onCheck={setCheck} defaultValue={ check }>Toggle Sticky</Switch>
    </div>
  );
}

const Switch = ({children, defaultValue, onCheck}) => {
  const [check, setCheck] = useState(defaultValue);
   
  useEffect(() => {
    onCheck(check);
  });
  
  return(
    <div className="switch">
      <label>
      <input
        type="checkbox"
        onClick={() => setCheck(!check)}
        checked={check}/>
       {' '} - { children }</label>
    </div>
  );
}

function useStickyHeader(offset = 0) {
  const [stick, setStick] = useState(false);
  
  const handleScroll = () => {
    setStick( window.scrollY > offset );
  };
  
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });
  
  return stick;
}

