export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://golf-trainer-dd112-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(coachData)
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error ...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://golf-trainer-dd112-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [
      // {
      //   id: 'c1',
      //   firstName: 'Maximilian',
      //   lastName: 'Schwarzmüller',
      //   areas: ['frontend', 'backend', 'career'],
      //   description:
      //     "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
      //   hourlyRate: 30
      // },
      // {
      //   id: 'c2',
      //   firstName: 'Julie',
      //   lastName: 'Jones',
      //   areas: ['frontend', 'career'],
      //   description:
      //     'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
      //   hourlyRate: 30
      // }
    ];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  }
};
