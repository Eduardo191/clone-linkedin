import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLCTBAuTO7iTk3ZEOjTTXa299umJYqtzABDA&usqp=CAU" 
            alt="Logo" 
          />
          <Column>
            <h3>Atlética Fatec SP</h3>
            <h4>Grupo esportivo universitário</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://s1.static.brasilescola.uol.com.br/be/vestibular/eaeb51fd61edc60d2544f2bd968df423.jpg"
          alt="Fachada Fatec SP"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
