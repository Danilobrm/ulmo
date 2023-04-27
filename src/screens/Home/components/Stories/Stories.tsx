import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import style from './style';

import {stories} from '../../../../mock/home/stories/mockStories';
import {StoriesType} from '../../../../types/StoriesType';
import Storie from '../../../../components/Story/Story';
// import { Container } from './styles';

const Stories = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story: StoriesType, index: number) => {
          return <Storie key={index} image={story.image} title={story.title} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stories;
