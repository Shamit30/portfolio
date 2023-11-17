
import React from "react";
import './skills.css';
import pythonIcon from '../../assets/python96.png';
import nodeIcon from '../../assets/nodejs96.png';
import reactIcon from '../../assets/reactjs96.png';
import javaIcon from '../../assets/java96.png';
import postgresqlIcon from '../../assets/postgresql96.png';
import elasticsearchIcon from '../../assets/elasticsearch.png';
import redisIcon from '../../assets/redis96.png';
import awsIcon from '../../assets/aws96.png';
import javascriptIcon from '../../assets/javascript96.png';
import typescriptIcon from '../../assets/typescript96.png';
import bootstraptIcon from '../../assets/bootstrap96.png';
import vscodeIcon from '../../assets/vscode.png';
import postmanIcon from '../../assets/postman.png';
import gitIcon from '../../assets/git96.png';
import githubIcon from '../../assets/github96.png';
import gitlabIcon from '../../assets/gitlab96.png';
import asanaIcon from '../../assets/asana.png';
import TechBlock from "../TechBlock/techBlock";

const Skills = () => {

    const skillMapIconDesc = [
        {"icon": pythonIcon, "name":"Python"},
        {"icon": nodeIcon, "name":"NodeJs"},
        {"icon": reactIcon, "name":"ReactJs"},
        {"icon": javaIcon, "name":"Java"},
        {"icon": postgresqlIcon, "name":"postgresql"},
        {"icon": elasticsearchIcon, "name":"Elasticsearch"},
        {"icon": awsIcon, "name":"AWS"},
        {"icon": redisIcon, "name":"Redis"},
        {"icon": javascriptIcon, "name":"Javascript"},
        {"icon": typescriptIcon, "name":"Typescript"},
        {"icon": bootstraptIcon, "name":"Bootstrapt"},
        ]
    
    const toolMapIconDesc = [
        {"icon": vscodeIcon, "name":"Vscode"},
        {"icon": gitIcon, "name":"Git"},
        {"icon": githubIcon, "name":"gitHub"},
        {"icon": gitlabIcon, "name":"gitLab"},
        {"icon": postmanIcon, "name":"postman"},
        {"icon": asanaIcon, "name":"Asana"},
    ]
    const SkillIcon = ({ icon, name }) => (
            <div>
            <img src={icon} alt={name} className="skillIconImg" />
            <p className="skillName">{name}</p>
            </div>
        );
    return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <TechBlock />
        <span className="skillDesc">I am a Software Developer with expertise in Python, Node.js, React.js, AWS, Machine Learning. Committed to crafting innovative solutions. My passion lies in maintaining the highest coding standards while delivering user-centric applications. Let's build something amazing together!</span>
        <div className="skillIcons">
            <span className="skillIntro">I have gained confidence in utilizing the following technologies.</span>
            <div className="skillIcon">
                {skillMapIconDesc.map((skill, index) => {
                    return (
                        <SkillIcon key={index} icon={skill.icon} name={skill.name} />
                    )
                })}
            </div>
            <span className="skillIntro">Tools that I utilized during the development.</span>
            <div className="skillIcon">
                {toolMapIconDesc.map((tool,index) => {
                    return (
                        <SkillIcon key={index} icon={tool.icon} name={tool.name} />
                    )
                })}
            </div>
            </div>
        
    </section>
    )
}
export default Skills;