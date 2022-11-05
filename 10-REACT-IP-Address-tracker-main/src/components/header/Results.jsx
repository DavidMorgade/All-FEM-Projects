// Styled components
import { IpContainer, DesktopCont, Title, Result } from './styled-results';
// React Hooks
import { useEffect } from 'react';
// Custom Context Hooks
import { useDataContext } from '../../context/useDataContext';
import { useLoadContext } from '../../context/useLoadContext';
import { useIpContext } from '../../context/useIpContext';


const Results = () => {
  const [data, setData] = useDataContext({});
  const [loaded, setLoaded] = useLoadContext(false);
  const [ip, _] = useIpContext(0);
  const apiKey = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
        );
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const responseData = await response.json();
        setData(responseData);
        setLoaded(true)
      } catch (error) {
        console.log(error);
      }
    };
    fetchLocation();
  }, [setData, ip, setLoaded]);


  return (
    <IpContainer>
      <DesktopCont>
        <Title>IP ADDRESS</Title>
        {loaded && <Result>{data.ip}</Result>}
      </DesktopCont>
      <DesktopCont>
        <Title>LOCATION</Title>
        {loaded && <Result>{`${data.location.city}, ${data.location.country} ${data.location.postalCode}`}</Result>}
      </DesktopCont>
      <DesktopCont>
        <Title>TIMEZONE</Title>
        {loaded && <Result>{`UTC ${data.location.timezone}`}</Result>}
      </DesktopCont>
      <DesktopCont>
        <Title>ISP</Title>
        {loaded && <Result>{data.isp}</Result>}
      </DesktopCont>
    </IpContainer>
  );
};

export default Results;
