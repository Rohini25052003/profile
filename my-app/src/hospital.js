import React from 'react';
import "./App.css";
import { useNavigate } from 'react-router-dom';
function Hospital(){
    const nav=useNavigate();
    const Hospital=()=>{
        nav('/hospital');

    }
    const Home=()=>{
        nav('/');
    }
    return(
        <>
        <div>
        <h1><center>HOSPITAL</center></h1> 
      
       <center><img src="hospital.jpg" alt="dummy" width="300" height="300" /></center>
        <p> While I am not undermining some improvisation indicated by better health indices, corporate participation, available resources through the National Rural Health Mission, but it has been too little and too late. The present health scenario is a toxic combination of uneven quality, high cost, frequent errors and limited access for marginalized population. It is observed that 70% of population has no access to specialist care as 80% of specialists live in urban areas. Only 13% of rural population have access to primary health centers, 33% to sub-center and 9.6% to a hospital (NFHS-II). Poor quality services at state-run hospitals force many people to visit private facilities. The overall health care utilization is also low, only half of (52%) of Indian mothers receive three or more ante natal checkups; Only 43.5% of children in India receive all vaccinations . At one side our peripheral health centres are underutilized whereas on other side our tertiary and secondary (District) level facilities are often argued as overloaded with the work that could have been done at lower centres, resulting in compromise of quality. Others continue to argue that even these centres have not successfully exploited the skills of its specialists with only OPDs/OTs per week per physician. The underutilization of peripheral centres is attributed to varied factors related to accessibility, quality, affordability, deficient human resource, poor monitoring, lack of community participation and ownership. Vast and diverse geographical locations of India inhibits proper penetration of health care delivery in such areas. Further, health care personnel are reluctant to work at block or below level areas, as they have to face two challenges, first the absence of reasonable living conditions (eg. proper housing, 24 hour electricity supply, good school for their children, social isolation etc) and second, the under functioning of majority of health care facilities in such areas and hence no opportunity to translate their technical skills. Absence of stringent transfer policy leads to frustration among staff. Posting of surgeons at under functioning facilities at the beginning of their career erodes their surgical skills and make them non-functional forever. The absence of accessible quality primary care services leads many poor people to either forgo medical care altogether or choose to seek expensive and unregulated care in the private sector. Lack of adequate quality data on burden of disease and trauma for proper planning along with poor public health awareness are a few more issues. MCI and Nursing council of India in their current shape are inert to some extent as their main focus is only on quantitative assessment of staff, infrastructure, material and equipments rather than quality or treatment audit. The qualitative assessment e.g. professional skills of staff, managerial skills of administrators, quality of health care provided, quality of students trained at these institutes are totally missing. Deep rooted corruption is prohibiting the smooth flow of system, especially the prompt purchase of medical equipments and diagnostics. Directorate of Medical and Health, the apex administrative and regulatory body for Medical and Health in India lacks the technical expertise and needs overhauling. The middle level managers of health system e.g. CMHOs, BMOs are unable to accomplish tasks at their own level. They act as a weak link between higher authority and periphery. System has taken away their self-esteem. </p>
       <center><button onClick={Home}>Home</button></center>
       <textarea />
        </div>
        </>

    );
}
export default Hospital;