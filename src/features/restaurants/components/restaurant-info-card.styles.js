import styled from 'styled-components/native';
import { Image, View, Text } from 'react-native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled(Text)`
font-size: ${(props) => props.theme.fontSizes.caption}
font-family: ${(props) => props.theme.fonts.body}
`;

export const Rating = styled(View)`
padding-top: 10px
padding-bottom: 10px
flex-direction: row
`;

export const Open = styled(View)`
flex: 1
flex-direction:row
    justify-content: flex-end;
`;

export const Wrapping = styled(View)`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Image)`
    width: 15px;
    height: 15px;
`;
