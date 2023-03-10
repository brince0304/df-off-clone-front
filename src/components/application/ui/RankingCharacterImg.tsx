import React from 'react';
import '../../../assets/css/rankingTable.scss'
import styled from "styled-components";


interface CharacterImgProps {
    serverId: string,
    characterId: string;
}

const CharacterImg = styled.img`
  width: 80px;
  height: 100px;
  scale: 3;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: inline-block;
  margin-left: 20px;

`

function characterUrl(props: CharacterImgProps) {
    return `https://img-api.neople.co.kr/df/servers/${props.serverId}/characters/${props.characterId}?zoom=3`;
}

export function RankingCharacterImg(props: CharacterImgProps) {
    return (
        <ImgWrapper>
            <CharacterImg id="characterImg" src={characterUrl(props)} alt="캐릭터 이미지"/>
        </ImgWrapper>
    );
}
