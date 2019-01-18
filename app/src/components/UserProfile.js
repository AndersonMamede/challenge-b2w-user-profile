import React from 'react';

import styles from './UserProfile.module.css';
import Photo from './Photo.js';
import SkillBar from './SkillBar.js';
import TextList from './TextList.js';
import { userDataType } from './../types';

const UserProfile = ({ user }) => (
  <section className={styles.profile}>
    <div className={styles.section_personal}>
      <div className={styles.personal_container}>
        <Photo name={user.name} src={user.image}/>
        <h1 className={styles.fullname}>{user.name}</h1>
        <h2 className={styles.profession}>{user.profession}</h2>
      </div>
      <hr className={styles.separator}/>
      <div className={styles.personal_container}>
        <div className={styles.box_description}>
          <h3 className={styles.subtitle}>PROFILE</h3>
          <div className={styles.description_data}>{user.description}</div>
        </div>
        <div className={styles.box_contact}>
          <h3 className={styles.subtitle}>CONTACT</h3>
          <div className={styles.contact_data}>
            {user.contact.tel ? <div>{user.contact.tel}</div> : null}
            {user.contact.cel ? <div>{user.contact.cel}</div> : null}
            {user.contact.tel || user.contact.tel ? <br/> : null}
            {user.contact.address}<br/>
            <br/>
            {user.contact.website}<br/>
            {user.contact.mail}
          </div>
        </div>
        <div className={styles.box_skills}>
          <h3 className={styles.subtitle}>SKILLS</h3>
          <div className={styles.skills_data}>
            {user.skills.map(skill =>
              <SkillBar key={skill.name} name={skill.name} value={skill.value}/>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className={styles.section_history}>
      <TextList title="Work experience" itens={user.experiences}/>
      <TextList title="Education" itens={user.education}/>
    </div>
  </section>
);

UserProfile.propTypes = {
  user: userDataType.isRequired
};

export default UserProfile;
