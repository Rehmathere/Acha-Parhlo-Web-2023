import React, { useState, useEffect } from 'react';
import PSidebar from '../PSidebar'
// CSS
import '../PProfile/PProfile.css'
import "./PRecords.css"
import "../PTracking/PT.css"
// Images
import logout from '../../../Pics/logout.png'
import user from '../../../Pics/fileupload.png'
import fileupload from '../../../Pics/fileupload.png'
// Firebase
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { database1 } from '../../firebase';
// Logout Logic 
import { database } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import E_User from "../../../Pics/E_User.png"

export default function PR_List() {
    // Email Address For Logout Dialog Box
    const [user] = useAuthState(database);
    // --------- Backend Part Logic ---------
    const { id } = useParams();
    // 1 - University Detail
    const [U1_UniversityName, setU1_UniversityName] = useState('');
    const [U2_Campus, setU2_Campus] = useState('');
    const [U3_intake, setU3_intake] = useState('');
    const [U4_courseName, setU4_courseName] = useState('');
    // 2 - Personal Detail
    const [P1_title, setP1_title] = useState('');
    const [P2_familyName, setP2_familyName] = useState('');
    const [P3_givenName, setP3_givenName] = useState('');
    const [P4_countryOfBirth, setP4_countryOfBirth] = useState('');
    const [P5_cityOfBirth, setP5_cityOfBirth] = useState('');
    const [P6_countryOfCitizenship, setP6_countryOfCitizenship] = useState('');
    const [P7_dualCitizen, setP7_dualCitizen] = useState('');
    const [P8_email, setP8_email] = useState('');
    const [P9_firstLanguageSpoken, setP9_firstLanguageSpoken] = useState('');
    const [P10_maritalStatus, setP10_maritalStatus] = useState('');
    const [P11_medicalIssue, setP11_medicalIssue] = useState('');
    const [P12_disability, setP12_disability] = useState('');
    const [P13_crimeConviction, setP13_crimeConviction] = useState('');
    const [P14_homeCountryAddress, setP14_homeCountryAddress] = useState('');
    const [P15_homeCountryPhoneNumber, setP15_homeCountryPhoneNumber] = useState('');
    const [P16_visaRefusal, setP16_visaRefusal] = useState('');
    const [P17_refusedEntry, setP17_refusedEntry] = useState('');
    // 3 - English Ability Detail
    const [E1_EnglishTestName, setE1_EnglishTestName] = useState('');
    const [E2_OverallScore, setE2_OverallScore] = useState('');
    const [E3_ListeningScore, setE3_ListeningScore] = useState('');
    const [E4_ReadingScore, setE4_ReadingScore] = useState('');
    const [E5_WritingScore, setE5_WritingScore] = useState('');
    const [E6_SpeakingScore, setE6_SpeakingScore] = useState('');
    const [E7_TestReferenceNumber, setE7_TestReferenceNumber] = useState('');
    const [E8_StudyInEnglish, setE8_StudyInEnglish] = useState('');
    // 4 - Education Detail
    const [ED1_HighSchoolYear12Equivalent, setED1_HighSchoolYear12Equivalent] = useState('');
    const [ED2_SchoolName, setED2_SchoolName] = useState('');
    const [ED3_ProgramName, setED3_ProgramName] = useState('');
    const [ED4_Country, setED4_Country] = useState('');
    const [ED5_CourseLengthMedium, setED5_CourseLengthMedium] = useState('');
    const [ED6_MonthYearStarted, setED6_MonthYearStarted] = useState('');
    const [ED7_MonthYearFinished, setED7_MonthYearFinished] = useState('');
    const [ED8_CompleteIncompleteWithdrawn, setED8_CompleteIncompleteWithdrawn] = useState('');
    const [ED9_IfIncompleteThenWhenFinish, setED9_IfIncompleteThenWhenFinish] = useState('');
    const [ED10_IfIncompleteThenResultAvailableDate, setED10_IfIncompleteThenResultAvailableDate] = useState('');
    // 5 - Additional Detail 
    const [A1_FathersHighestQualification, setA1_FathersHighestQualification] = useState('');
    const [A2_MothersHighestQualification, setA2_MothersHighestQualification] = useState('');
    const [A3_GrantedScholarshipBefore, setA3_GrantedScholarshipBefore] = useState('');
    const [A4_ApplyingForScholarship, setA4_ApplyingForScholarship] = useState('');
    // 6 - Bachelor Detail
    const [B1_UniversityName, setB1_UniversityName] = useState('');
    const [B2_ProgramName, setB2_ProgramName] = useState('');
    const [B3_CourseLengthMedium, setB3_CourseLengthMedium] = useState('');
    const [B4_Country, setB4_Country] = useState('');
    const [B5_MonthYearStarted, setB5_MonthYearStarted] = useState('');
    const [B6_MonthYearFinished, setB6_MonthYearFinished] = useState('');
    const [B7_CompleteIncompleteWithdrawn, setB7_CompleteIncompleteWithdrawn] = useState('');
    const [B8_IfIncompleteThenWhenFinish, setB8_IfIncompleteThenWhenFinish] = useState('');
    const [B9_IfIncompleteThenResultAvailableDate, setB9_IfIncompleteThenResultAvailableDate] = useState('');
    const [B10_ApplyingForCredits, setB10_ApplyingForCredits] = useState('');
    const [B11_CompletedMastersDegree, setB11_CompletedMastersDegree] = useState('');
    // Images Upload File
    const [D1_1_Image_10Cert, setD1_1_Image_10Cert] = useState("");
    const [D1_1_Image_10Mark, setD1_1_Image_10Mark] = useState("");
    const [D2_1_Image_11Mark, setD2_1_Image_11Mark] = useState("");
    const [D2_2_Image_11Cert, setD2_2_Image_11Cert] = useState("");
    const [D3_1_Image_Transcript, setD3_1_Image_Transcript] = useState("");
    const [D3_2_Image_Degree, setD3_2_Image_Degree] = useState("");
    const [D4_1_Image_Front, setD4_1_Image_Front] = useState("");
    const [D4_2_Image_Back, setD4_2_Image_Back] = useState("");
    const [D5_1_Image_IELTS, setD5_1_Image_IELTS] = useState("");
    const [D6_1_Image_Gap, setD6_1_Image_Gap] = useState("");
    const [D7_1_Image_Resume, setD7_1_Image_Resume] = useState("");
    const [D8_1_Image_PassFirst, setD8_1_Image_PassFirst] = useState("");
    const [D8_2_Image_PassSign, setD8_2_Image_PassSign] = useState("");
    const [U_Extra_Uni_Image, setU_Extra_Uni_Image] = useState("");
    // Function
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(database1, '4 - Student Records', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    // 1 - University Detail
                    setU1_UniversityName(data.U1_universityName || '----------');
                    setU2_Campus(data.U2_campus || '----------');
                    setU3_intake(data.U3_intake || '----------');
                    setU4_courseName(data.U4_courseName || '----------');
                    // 2 - Personal Detail
                    setP1_title(data.P1_title || '----------');
                    setP2_familyName(data.P2_familyName || '----------');
                    setP3_givenName(data.P3_givenName || '----------');
                    setP4_countryOfBirth(data.P4_countryOfBirth || '----------');
                    setP5_cityOfBirth(data.P5_cityOfBirth || '----------');
                    setP6_countryOfCitizenship(data.P6_countryOfCitizenship || '----------');
                    setP7_dualCitizen(data.P7_dualCitizen || '----------');
                    setP8_email(data.P8_email || '----------');
                    setP9_firstLanguageSpoken(data.P9_firstLanguageSpoken || '----------');
                    setP10_maritalStatus(data.P10_maritalStatus || '----------');
                    setP11_medicalIssue(data.P11_medicalIssue || '----------');
                    setP12_disability(data.P12_disability || '----------');
                    setP13_crimeConviction(data.P13_crimeConviction || '----------');
                    setP14_homeCountryAddress(data.P14_homeCountryAddress || '----------');
                    setP15_homeCountryPhoneNumber(data.P15_homeCountryPhoneNumber || '----------');
                    setP16_visaRefusal(data.P16_visaRefusal || '----------');
                    setP17_refusedEntry(data.P17_refusedEntry || '----------');
                    // 3 - English Ability
                    setE1_EnglishTestName(data.E1_EnglishTestName || '----------');
                    setE2_OverallScore(data.E2_OverallScore || '----------');
                    setE3_ListeningScore(data.E3_ListeningScore || '----------');
                    setE4_ReadingScore(data.E4_ReadingScore || '----------');
                    setE5_WritingScore(data.E5_WritingScore || '----------');
                    setE6_SpeakingScore(data.E6_SpeakingScore || '----------');
                    setE7_TestReferenceNumber(data.E7_TestReferenceNumber || '----------');
                    setE8_StudyInEnglish(data.E8_StudyInEnglish || '----------');
                    // 4 - Education Detail
                    setED1_HighSchoolYear12Equivalent(data.ED1_HighSchoolYear12Equivalent || '----------');
                    setED2_SchoolName(data.ED2_SchoolName || '----------');
                    setED3_ProgramName(data.ED3_ProgramName || '----------');
                    setED4_Country(data.ED4_Country || '----------');
                    setED5_CourseLengthMedium(data.ED5_CourseLengthMedium || '----------');
                    setED6_MonthYearStarted(data.ED6_MonthYearStarted || '----------');
                    setED7_MonthYearFinished(data.ED7_MonthYearFinished || '----------');
                    setED8_CompleteIncompleteWithdrawn(data.ED8_CompleteIncompleteWithdrawn || '----------');
                    setED9_IfIncompleteThenWhenFinish(data.ED9_IfIncompleteThenWhenFinish || '----------');
                    setED10_IfIncompleteThenResultAvailableDate(data.ED10_IfIncompleteThenResultAvailableDate || '----------');
                    // 5 - Additional Detail
                    setA1_FathersHighestQualification(data.A1_FathersHighestQualification || '----------');
                    setA2_MothersHighestQualification(data.A2_MothersHighestQualification || '----------');
                    setA3_GrantedScholarshipBefore(data.A3_GrantedScholarshipBefore || '----------');
                    setA4_ApplyingForScholarship(data.A4_ApplyingForScholarship || '----------');
                    // 6 - Bachelor Detail
                    setB1_UniversityName(data.B1_UniversityName || '----------');
                    setB2_ProgramName(data.B2_ProgramName || '----------');
                    setB3_CourseLengthMedium(data.B3_CourseLengthMedium || '----------');
                    setB4_Country(data.B4_Country || '----------');
                    setB5_MonthYearStarted(data.B5_MonthYearStarted || '----------');
                    setB6_MonthYearFinished(data.B6_MonthYearFinished || '----------');
                    setB7_CompleteIncompleteWithdrawn(data.B7_CompleteIncompleteWithdrawn || '----------');
                    setB8_IfIncompleteThenWhenFinish(data.B8_IfIncompleteThenWhenFinish || '----------');
                    setB9_IfIncompleteThenResultAvailableDate(data.B9_IfIncompleteThenResultAvailableDate || '----------');
                    setB10_ApplyingForCredits(data.B10_ApplyingForCredits || '----------');
                    setB11_CompletedMastersDegree(data.B11_CompletedMastersDegree || '----------');
                    // - Image -
                    setD1_1_Image_10Cert(data.D1_1_Image_10Cert || "");
                    setD1_1_Image_10Mark(data.D1_1_Image_10Mark || "");
                    setD2_1_Image_11Mark(data.D2_1_Image_11Mark || "");
                    setD2_2_Image_11Cert(data.D2_2_Image_11Cert || "");
                    setD3_1_Image_Transcript(data.D3_1_Image_Transcript || "");
                    setD3_2_Image_Degree(data.D3_2_Image_Degree || "");
                    setD4_1_Image_Front(data.D4_1_Image_Front || "");
                    setD4_2_Image_Back(data.D4_2_Image_Back || "");
                    setD5_1_Image_IELTS(data.D5_1_Image_IELTS || "");
                    setD6_1_Image_Gap(data.D6_1_Image_Gap || "");
                    setD7_1_Image_Resume(data.D7_1_Image_Resume || "");
                    setD8_1_Image_PassFirst(data.D8_1_Image_PassFirst || "");
                    setD8_2_Image_PassSign(data.D8_2_Image_PassSign || "");
                    // Extra University Logo
                    setU_Extra_Uni_Image(data.U_Extra_Uni_Image || "");
                } else {
                    console.error('Document not found.');
                    // Handle the case where the document with the specified ID does not exist
                }
            } catch (error) {
                console.error('Error fetching data from Firestore:', error);
                // Handle the error appropriately, e.g., show an error message to the user
            }
        };

        fetchData();
    }, [id]);
    // --------- Backend Part Logic ---------
    // Image Logic
    const [image, setImage] = useState(null);
    // ------ Logout Logic ------
    // useNavigate 
    const navigate = useNavigate();
    // Logout Function
    const handleClick = () => {
        signOut(database).then(val => {
            console.log(val, 'val');
            navigate('/PLogin');
        })
    }
    // Use state to manage the visibility of the Logout Box
    const [isLogoutBoxVisible, setLogoutBoxVisibility] = useState(false);
    // Function to toggle the visibility of the Logout Box
    const toggleLogoutBox = () => {
        setLogoutBoxVisibility(!isLogoutBoxVisible);
    };
    // ----------------------------------------------------
    // Main Body
    return (
        <div>
            {/* Header Portion */}
            <div id="Header">
                <div id="sub_Header">
                    <div id="Head_1">
                        <p>Acha Parhlo Consultant Portal</p>
                    </div>
                    <div id="Head_2">
                        <button id="sub_Head_2" onClick={toggleLogoutBox}>
                            <img src={logout} alt="NA" />
                        </button>
                    </div>
                </div>
            </div>
            {/* ------------- */}
            <PSidebar>
                {/* PR_List */}
                {/* PTS_Pre, sub_PTS_Pre, PTS_Pre_Box Are Write For Media Query Identification */}
                <div id="PTS_Pre">
                    <div id="sub_PTS_Pre">
                        <div id="PTS_Pre_Box">
                            <h2>Student Records Detail <i class="fa fa-id-card-o"></i></h2>
                        </div>
                        <br />
                        {/* --- University Logo ( Coming From Apply Uni  ) --- */}
                        <div id="Ext_Uni_Logo_Coming">
                            <div id="sub_Ext_Uni_Logo_Coming">
                                <div id="Ext_Uni_Logo_Coimng_Img_Box">
                                    <div id="Ext_Uni_Logo_Coimng_Img">
                                        <img src={U_Extra_Uni_Image} alt="NA" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        {/* Information List */}
                        <div id="PR_List_Detail">
                            {/* ---- 1 - University Information ---- */}
                            <h3>1 - University Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">University Name</div>
                                    <div id="PR_D_B_2">{U1_UniversityName}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Campus</div>
                                    <div id="PR_D_B_2">{U2_Campus}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Intake</div>
                                    <div id="PR_D_B_2">{U3_intake}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Course Name</div>
                                    <div id="PR_D_B_2">{U4_courseName}</div>
                                </div>
                            </div>
                            {/* ---- 1 - University Information ---- */}
                            <h3>2 - Personal Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Title</div>
                                    <div id="PR_D_B_2">{P1_title}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Family Name</div>
                                    <div id="PR_D_B_2">{P2_familyName}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Given Name</div>
                                    <div id="PR_D_B_2">{P3_givenName}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Date of Birth</div>
                                    <div id="PR_D_B_2">{P4_countryOfBirth}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">City of Birth</div>
                                    <div id="PR_D_B_2">{P5_cityOfBirth}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Country of Citizenship</div>
                                    <div id="PR_D_B_2">{P6_countryOfCitizenship}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Dual Citizen</div>
                                    <div id="PR_D_B_2">{P7_dualCitizen}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Email Address</div>
                                    <div id="PR_D_B_2">{P8_email}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">First Language Spoken</div>
                                    <div id="PR_D_B_2">{P9_firstLanguageSpoken}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Marital Status</div>
                                    <div id="PR_D_B_2">{P10_maritalStatus}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Have Any Medical Or Health Issue</div>
                                    <div id="PR_D_B_2">{P11_medicalIssue}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Do you have disability, impairment or long term medical condition?</div>
                                    <div id="PR_D_B_2">{P12_disability}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Been convicted of any crime or offence in any Country</div>
                                    <div id="PR_D_B_2">{P13_crimeConviction}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Home Country Address with Suburb, City, State, Country & postcode</div>
                                    <div id="PR_D_B_2">{P14_homeCountryAddress}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Home Country Phone Number with Area & Country Code</div>
                                    <div id="PR_D_B_2">{P15_homeCountryPhoneNumber}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Visa refusal of Australia</div>
                                    <div id="PR_D_B_2">{P16_visaRefusal}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Been refused entry to any Country</div>
                                    <div id="PR_D_B_2">{P17_refusedEntry}</div>
                                </div>
                            </div>
                            {/* ---- 3 - English Test Data ---- */}
                            <h3>3 - English Ability Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">English Test Name (PTE/IELTS)</div>
                                    <div id="PR_D_B_2">{E1_EnglishTestName}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Overall Score</div>
                                    <div id="PR_D_B_2">{E2_OverallScore}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Listening Score</div>
                                    <div id="PR_D_B_2">{E3_ListeningScore}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Reading Score</div>
                                    <div id="PR_D_B_2">{E4_ReadingScore}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Writing Score</div>
                                    <div id="PR_D_B_2">{E5_WritingScore}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Speaking Score</div>
                                    <div id="PR_D_B_2">{E6_SpeakingScore}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Test Reference Number</div>
                                    <div id="PR_D_B_2">{E7_TestReferenceNumber}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Have you undertaken and completed any study where English is language of instruction? </div>
                                    <div id="PR_D_B_2">{E8_StudyInEnglish}</div>
                                </div>
                            </div>
                            {/* ---- 4 - Education Data ---- */}
                            <h3>4 - Education Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">High School / Year 12 / Equivalent</div>
                                    <div id="PR_D_B_2">{ED1_HighSchoolYear12Equivalent}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">School Name</div>
                                    <div id="PR_D_B_2">{ED2_SchoolName}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Program Name</div>
                                    <div id="PR_D_B_2">{ED3_ProgramName}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Country</div>
                                    <div id="PR_D_B_2">{ED4_Country}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Course Length – Medium (Language) of Instruction </div>
                                    <div id="PR_D_B_2">{ED5_CourseLengthMedium}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Month / Year Started</div>
                                    <div id="PR_D_B_2">{ED6_MonthYearStarted}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Month / Year Finished</div>
                                    <div id="PR_D_B_2">{ED7_MonthYearFinished}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Complete or Incomplete or Withdrawn</div>
                                    <div id="PR_D_B_2">{ED8_CompleteIncompleteWithdrawn}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">If incomplete then when will finish</div>
                                    <div id="PR_D_B_2">{ED9_IfIncompleteThenWhenFinish}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">If incomplete then result available Date</div>
                                    <div id="PR_D_B_2">{ED10_IfIncompleteThenResultAvailableDate}</div>
                                </div>
                            </div>
                            {/* ---- 5 - Additional Data ---- */}
                            <h3>5 - Additional Details</h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Father Highest Qualification</div>
                                    <div id="PR_D_B_2">{A1_FathersHighestQualification}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Mother Highest Qualification</div>
                                    <div id="PR_D_B_2">{A2_MothersHighestQualification}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Have you granted Scholarship (Government or Private) before</div>
                                    <div id="PR_D_B_2">{A3_GrantedScholarshipBefore}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Are you applying for Scholarship (Government or Private)</div>
                                    <div id="PR_D_B_2">{A4_ApplyingForScholarship}</div>
                                </div>
                            </div>
                            {/* ---- 6 - Bachelor Data ---- */}
                            <h3>6 - Bachelor Details</h3>
                            <p id="PR_Detail_P_Hint">( A filled Bachelor field signifies an application for a Master's program, while an empty field indicates an application for a Bachelor's program. )</p>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">University Name</div>
                                    <div id="PR_D_B_2">{B1_UniversityName}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Program Name</div>
                                    <div id="PR_D_B_2">{B2_ProgramName}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Course Length - Medium (Language) of Instruction</div>
                                    <div id="PR_D_B_2">{B3_CourseLengthMedium}</div>
                                </div>
                                {/* Element( It Has 4 Sequence According To App Details )*/}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Country</div>
                                    <div id="PR_D_B_2">{B4_Country}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Month / Year Started</div>
                                    <div id="PR_D_B_2">{B5_MonthYearStarted}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Month / Year Finished</div>
                                    <div id="PR_D_B_2">{B6_MonthYearFinished}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Complete or Incomplete or Withdrawn</div>
                                    <div id="PR_D_B_2">{B7_CompleteIncompleteWithdrawn}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">If incomplete then when will finish</div>
                                    <div id="PR_D_B_2">{B8_IfIncompleteThenWhenFinish}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">If incomplete then result available Date</div>
                                    <div id="PR_D_B_2">{B9_IfIncompleteThenResultAvailableDate}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Are you applying for Credits base on this study</div>
                                    <div id="PR_D_B_2">{B10_ApplyingForCredits}</div>
                                </div>
                                {/* Element */}
                                <div id="PR_Detail_Box">
                                    <div id="PR_D_B_1">Have you completed a master's degree?</div>
                                    <div id="PR_D_B_2">{B11_CompletedMastersDegree}</div>
                                </div>
                            </div>
                            {/* --------------------------- */}
                            {/* ---- 1 - 10th Mark & Certif ---- */}
                            <h3>7 - 10th Class Marksheet & Certificate </h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box_Pic">
                                    <div id="PR_Detail_Box_Pic_Part_1">
                                        <img src={D1_1_Image_10Cert || user} alt="NA" />
                                    </div>
                                    <div id="PR_Detail_Box_Pic_Part_2">
                                        <img src={D1_1_Image_10Mark || user} alt="NA" />
                                    </div>
                                </div>
                            </div>
                            {/* ---- 2 - 11th Mark & Certif ---- */}
                            <h3>8 - 11th Class Marksheet & Certificate </h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box_Pic">
                                    <div id="PR_Detail_Box_Pic_Part_1">
                                        <img src={D2_1_Image_11Mark || user} alt="NA" />
                                    </div>
                                    <div id="PR_Detail_Box_Pic_Part_2">
                                        <img src={D2_2_Image_11Cert || user} alt="NA" />
                                    </div>
                                </div>
                            </div>
                            {/* ---- 3 - Bacheor Deg & Trans ---- */}
                            <h3>9 - Bachelor Degree & Transcript </h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box_Pic">
                                    <div id="PR_Detail_Box_Pic_Part_1">
                                        <img src={D3_1_Image_Transcript || user} alt="NA" />
                                    </div>
                                    <div id="PR_Detail_Box_Pic_Part_2">
                                        <img src={D3_2_Image_Degree || user} alt="NA" />
                                    </div>
                                </div>
                            </div>
                            {/* ---- 4 - ID Card ---- */}
                            <h3>10 - ID Card ( Front, Back ) </h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box_Pic">
                                    <div id="PR_Detail_Box_Pic_Part_1">
                                        <img src={D4_1_Image_Front || user} alt="NA" />
                                    </div>
                                    <div id="PR_Detail_Box_Pic_Part_2">
                                        <img src={D4_2_Image_Back || user} alt="NA" />
                                    </div>
                                </div>
                            </div>
                            {/* ---- 5 - IELTS Score ---- */}
                            <h3>11 - Copy Of IELTS Score </h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box_Pic">
                                    <div id="PR_Detail_Box_Pic_Part_1">
                                        <img src={D5_1_Image_IELTS || user} alt="NA" />
                                    </div>
                                </div>
                            </div>
                            {/* ---- 6 - Gap Proof ---- */}
                            <h3>12 - Any Gap Proof </h3>
                            <p id="PR_Detail_P_Hint">( Any Experience & Job Letter, Diploma Certificate Etc. )</p>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box_Pic">
                                    <div id="PR_Detail_Box_Pic_Part_1">
                                        <img src={D6_1_Image_Gap || user} alt="NA" />
                                    </div>
                                </div>
                            </div>
                            {/* ---- 7 - Resume ---- */}
                            <h3>13 - Updated Resume </h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box_Pic">
                                    <div id="PR_Detail_Box_Pic_Part_1">
                                        <img src={D7_1_Image_Resume || user} alt="NA" />
                                    </div>
                                </div>
                            </div>
                            {/* ---- 8 - Passport ---- */}
                            <h3>14 - Passport First & Signed Page </h3>
                            <div id="PR_Detail_Part">
                                {/* Element */}
                                <div id="PR_Detail_Box_Pic">
                                    <div id="PR_Detail_Box_Pic_Part_1">
                                        <img src={D8_1_Image_PassFirst || user} alt="NA" />
                                    </div>
                                    <div id="PR_Detail_Box_Pic_Part_2">
                                        <img src={D8_2_Image_PassSign || user} alt="NA" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start */}
                {/* ---Logout Logic --- */}
                {isLogoutBoxVisible && (
                    <div id="Logout_Box">
                        {/* Above */}
                        <div id="sub_Logout_Box_Fir">
                            <img src={E_User} alt="NA" />
                            <span>{user.email}</span>
                        </div>
                        {/* Below */}
                        <div id="sub_Logout_Box">
                            <div id="Logout_Box_1">
                                You Want To Logout ?
                            </div>
                            <div id="Logout_Box_2">
                                <button onClick={handleClick}>Yes, Logout</button>
                            </div>
                        </div>
                    </div>
                )}
                {/* ------------------- */}
            </PSidebar>
        </div>
    )
}





