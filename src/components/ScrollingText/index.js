import { useEffect, useRef } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import withAnimContext from '../../context/withAnimContext';
import { scrollingTextStyles, Paragraph, Logo } from './styled';

/**
 * Programmatically smoothly scrolls content to its bottom
 * @name autoScroll
 * @param {Object} section - the React ref of the section containing the text container
 * @param {*} textfullHeight - the full height of the text, as measured by the height of text container 
 */
const autoScroll = (section, textfullHeight) => {
  const sectionHeight = section.offsetHeight;

  let toBottom, toTop;

  toBottom = setInterval(() => {
    let currentPos = section.scrollTop;
    if(currentPos < (textfullHeight - sectionHeight)) {
      section.scrollTop = currentPos + 1;
      currentPos = section.scrollTop;
    } else {
      clearInterval(toBottom);
      toBottom = undefined;

      toTop = setInterval(() => {
        if(currentPos > 0) {
          section.scrollTop = currentPos - 10;
          currentPos = section.scrollTop;
        } else {
          clearInterval(toTop);
          toTop = undefined;
        }
      }, 10);
    }
  }, 50);
};

const ScrollingText = props => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if(props.context.isScrolling) {
      const fullHeight = containerRef.current.offsetHeight;
      autoScroll(props.context.resetAnim, sectionRef.current, fullHeight);
    }
  }, [props.context.isScrolling]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section 
      css={scrollingTextStyles}
      ref={sectionRef}
    >
      <div ref={containerRef}>
        <Paragraph>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </Paragraph>
        <Paragraph>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </Paragraph>
        <Paragraph>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        </Paragraph>
        <Paragraph>
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify.
        </Paragraph>
        <Paragraph>
          Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.
        </Paragraph>
        <Paragraph>
          Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea. Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.
        </Paragraph>
        <Paragraph>
          Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.
        </Paragraph>
        <Paragraph>
          Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush tomato.
        </Paragraph>
        <br/>
        <Logo>
        <span>The Logo</span>
        </Logo>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </section>
  );
};

export default withAnimContext(ScrollingText);