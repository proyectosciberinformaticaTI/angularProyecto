import { Injectable } from '@angular/core';
import { CoreService } from '../core/core.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoryService extends CoreService {
  public static storyTypes = {
    'mobile': 'Mobile number',
    'email': 'Email',
    'free_text': 'Free Text',
    'number': 'Number',
    'list': 'List',
  };

  constructor(public http: HttpClient) {
    super(http);
  }

  getStories(botId) {
    let url = '/stories/';
    if (botId) {
      url = `${url}?botId=${botId}`;
    }
    return this.doGet(url);
  }

  getStory(id) {
    return this.doGet(`/stories/edit/${id}`);
  }

  saveStory(story) {
    if (story._id) {
      return this.updateStory(story);
    } else {
      delete story._id;
      return this.createStory(story);
    }
  }

  createStory(story) {
    return this.doPost(`/stories/`, story);
  }

  updateStory(story) {
    return this.doPut(`/stories/${story._id}`, story);
  }

  buildStory(id) {
    return this.doPost(`/core/buildModel/${id}`, {});
  }

  deleteStory(id) {
    return this.doDelete(`/stories/${id}`, {});
  }

  /**
   *
   * @param sentences ex.: i'm searching product
   */
  startLabeling(sentences) {
    return this.doPost(`/core/posTagAndLabel?json=true`, { sentences });
  }

  /**
   *
   * @param storyId  ex.:59fddff51ec5e81bf9d6e021
   * @param labeledSentence   ex.: [["i","NN","O"],["'m","VBP","O"],["searching","VBG","O"],["product","NN","O"]]
   */
  addToTestSet(storyId, labeledSentence, botId = 'default') {
    return this.doPost(`/train/insertLabeledSentence`, { storyId, botId, labeledSentence });
  }


  getBots() {
    return this.doGet(`/stories/bot`);
  }

  saveBot(bot) {
    if (bot._id) {
      return this.updateBot(bot);
    } else {
      delete bot._id;
      return this.createBot(bot);
    }
  }

  createBot(story) {
    return this.doPost(`/stories/bot`, story);
  }

  updateBot(story) {
    return this.doPut(`/stories/bot/${story._id}`, story);
  }
}
