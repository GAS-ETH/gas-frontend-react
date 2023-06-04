import styled from 'styled-components';
import logo from '../assets/personal-center-human-shape.png';

const OutmostWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  gap: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: red;
  width: 40px;
  height: 40px;
`;

const Logo = styled.img.attrs({
  src: logo,
  width: '100%',
  height: '100%',
})``;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const Username = styled.p`
  font-size: 35px;
  font-weight: bold;
`;

const Activity = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  justify-content: space-between;
  border: 3px solid gray;
  border-radius: 8px;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const Title = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

const Amount = styled.div`
  border-radius: 8px;
  padding: 3px 8px;
  width: auto;
  background-color: blue;
  color: white;
`;

const BioSection = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

const BioHeader = styled.p`
  font-size: 25px;
  color: black;
  font-weight: bold;
  padding-left: 20px;
`;

const Bio = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  background-color: lightgray;
  color: black;
  height: auto;
  border-radius: 8px;
`;

const CategorySection = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const CategoryHeader = styled.p`
  font-size: 25px;
  color: black;
  font-weight: bold;
  padding-left: 20px;
`;

const SearchSection = styled.div`
  display: flex;
  gap: 10px;
  height: 50px;
`;

const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  font-size: 20px;
`;

const ButtonSearch = styled.button`
  border: none;
  width: auto;
  padding: 5px 10px;
  background-color: lightgray;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    background-color: white;
    color: black;
  }
`;

const Suggestions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow: scroll;
  padding: 5px 10px;
  height: 70px;
  align-items: start;
`;

const Category = styled.div`
  border-radius: 8px;
  white-space: nowrap;
  padding: 3px 8px;
  overflow: ellipsis;
  width: auto;
  background-color: darkorange;
  color: white;
  &: hover {
    background-color: orange;
    color: blue;
    cursor: pointer;
  }
`;

const Profile = () => (
  <OutmostWrapper>
    <MainWrapper>
      <UserInfo>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Username>Orlando Garcia</Username>
      </UserInfo>
      <Activity>
        <TagWrapper>
          <Title>Attendance: </Title>
          <Amount>66</Amount>
        </TagWrapper>
        <TagWrapper>
          <Title>Reviews: </Title>
          <Amount>99</Amount>
        </TagWrapper>
        <TagWrapper>
          <Title>Events: </Title>
          <Amount>45</Amount>
        </TagWrapper>
      </Activity>
      <BioSection>
        <BioHeader>Bio</BioHeader>
        <Bio>
          abcdefgh@Abcds-MacBook-Pro gas-frontend-react % git commit -m 'profile
          photo' [main 6d5d9b2] profile photo 7 files changed, 189
          insertions(+), 73 deletions(-) create mode 100644
          src/assets/personal-center-human-shape.png create mode 100644
          src/assets/profile_pic.jpg abcdefgh@Abcds-MacBook-Pro
          gas-frontend-react % git push Enumerating objects: 21, done. Counting
          objects: 100% (21/21), done. Delta compression using up to 12 threads
          Compressing objects: 100% (11/11), done. Writing objects: 100%
          (12/12), 164.93 KiB | 32.99 MiB/s, done. Total 12 (delta 4), reused 0
          (delta 0), pack-reused 0 remote: Resolving deltas: 100% (4/4),
          completed with 4 local objects. To
          https://github.com/GAS-ETH/gas-frontend-react
        </Bio>
      </BioSection>
      <CategorySection>
        <CategoryHeader>Category</CategoryHeader>
        <SearchSection>
          <Input />
          <ButtonSearch>Search</ButtonSearch>
        </SearchSection>
        <Suggestions>
          <Category>Lotte Tower</Category>
          <Category>ETHSeoul</Category>
          <Category>BUIDL</Category>
          <Category>My place</Category>
          <Category>Your place</Category>
          <Category>Lotte Tower-2</Category>
          <Category>ETHSeoul-2</Category>
          <Category>BUIDL-2</Category>
          <Category>My place-2</Category>
          <Category>Your place-2</Category>
          <Category>Lotte Tower-3</Category>
          <Category>ETHSeoul-3</Category>
          <Category>BUIDL-3</Category>
          <Category>My place-3</Category>
          <Category>Your place-3</Category>
          <Category>Lotte Tower-4</Category>
          <Category>ETHSeoul-4</Category>
          <Category>BUIDL-4</Category>
          <Category>My place-4</Category>
          <Category>Your place-4</Category>
          <Category>Lotte Tower-5</Category>
          <Category>ETHSeoul-5</Category>
          <Category>BUIDL-5</Category>
          <Category>My place-5</Category>
          <Category>Your place-5</Category>
        </Suggestions>
      </CategorySection>
    </MainWrapper>
  </OutmostWrapper>
);
export default Profile;
