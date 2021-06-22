"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async randomquestion(ctx) {
    const quiz = await strapi.query("quiz").findOne({ _id: ctx.params.id });
    if (!quiz) {
      ctx.send(
        {
          error: "quiz does not exist",
        },
        404
      );

      return;
    }

    const questions = quiz.questions;

    if (questions.length == 0) {
      ctx.send({
        error: "No questions available",
      });

      return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const { question_text: question, options } = questions[randomIndex];
    ctx.send({
      question,
      options,
    });
    return;
  },

  async randomquestionslug(ctx) {
    const quiz = await strapi.query("quiz").findOne({ slug: ctx.params.slug });
    if (!quiz) {
      ctx.send(
        {
          error: "quiz does not exist",
        },
        404
      );

      return;
    }

    const questions = quiz.questions;

    if (questions.length == 0) {
      ctx.send({
        error: "No questions available",
      });

      return;
    }

    const randomIndex = Math.floor(Math.random() * questions.length);
    const { question_text: question, options } = questions[randomIndex];
    ctx.send({
      question,
      options,
    });
    return;
  },

  async quizbysulg(ctx) {
    const quiz = await strapi.query("quiz").findOne({ slug: ctx.params.slug });
    if (!quiz) {
      ctx.send(
        {
          error: "quiz does not exist",
        },
        404
      );

      return;
    }

    ctx.send({
      id: quiz.id,
      name: quiz.name,
      slug: quiz.slug,
      base_question: quiz.base_question,
    });
    return;
  },
};
