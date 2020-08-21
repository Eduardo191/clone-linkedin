import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/Eduardo191.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Eduardo Ferreira</h1>
        <h2>Estudante de programação</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">34</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">12</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
