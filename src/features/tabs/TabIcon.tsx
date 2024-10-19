import HomeFocused from '../../assets/icons/home_focused.png';
import SearchFocused from '../../assets/icons/search_focused.png';
import LibraryFocused from '../../assets/icons/library_focused.png';

import Home from '../../assets/icons/home.png';
import Search from '../../assets/icons/search.png';
import Library from '../../assets/icons/library.png';
import {Image, ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import {Colors, Fonts} from '../../utils/Constants';
import {fontR} from '../../utils/Scaling';
import {FC} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomText from '../../components/ui/CustomText';

interface TabProps {
  name: String;
}

interface IconProp {
  focused: Boolean;
}

const styles: ImageStyle = {
  width: RFValue(18),
  height: RFValue(18),
};

const tabStyles: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyleInActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.inactive,
  fontSize: fontR(9.5),
};

const textStyleActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.text,
  fontSize: fontR(9.5),
};

const TabIcon: FC<TabProps> = ({name}) => {
  return (
    <View style={tabStyles}>
      <Image
        source={name === 'Home' ? Home : name === 'Search' ? Search : Library}
        style={[styles]}
      />
      <CustomText style={textStyleInActive}>
        {name}
      </CustomText>
    </View>
  );
};

const TabIconFocused: FC<TabProps> = ({name}) => {
  return (
    <View style={tabStyles}>
      <Image
        source={
          name === 'Home'
            ? HomeFocused
            : name === 'Search'
            ? SearchFocused
            : LibraryFocused
        }
        style={[styles]}
      />
      <CustomText fontFamily={Fonts.Bold} style={textStyleActive}>
        {name}
      </CustomText>
    </View>
  );
};

export const HomeTabIcon: FC<IconProp> = ({focused}) => {
  return focused ? <TabIconFocused name="Home" /> : <TabIcon name="Home" />;
};

export const LibraryTabIcon: FC<IconProp> = ({focused}) => {
  return focused ? (
    <TabIconFocused name="Library" />
  ) : (
    <TabIcon name="Library" />
  );
};

export const SearchTabIcon: FC<IconProp> = ({focused}) => {
  return focused ? <TabIconFocused name="Search" /> : <TabIcon name="Search" />;
};

// 1:07:38
