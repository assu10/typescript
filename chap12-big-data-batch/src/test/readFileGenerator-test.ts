import {readFileGenerator} from "../fileApi";

for (let value of readFileGenerator('data/fake-10.csv')) {
    console.log('<line>', value, '</line>\n');
}
/*
<line> name,email,profession,birthday,sentence </line>

<line> Carrie Lloyd,hewfuc@or.mu,Aerospace Engineer,Sun Jul 15 2001 16:21:59 GMT+0900 (Korean Standard Time),Nu comwa comu maw pez wukibuz ul dollasek sujo sof ohizuz vab oza. </line>
*/
