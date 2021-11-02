

export const getIpInfo = async (ipToFind) => {

   const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_YWtDvVxztnefjj5f5kG7pMvPZLGca&ipAddress=${ipToFind}`
   const res = await fetch(url);
   if(!res.ok)
        throw new Error("WARN", res.status);
   const {ip, location, isp} = await res.json();
  
   return{
       ip,
       location,
       isp
   }

}
