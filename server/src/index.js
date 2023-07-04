'use strict';

// ...................kafka 
// const { Kafka } = require('kafkajs')
// const kafka = new Kafka({
//   brokers: ['localhost:9092']
// })

// .....................nodemailer for pushing notification
// const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//       user: 'yourgmailaccount@gmail.com',
//       pass: 'yourgmailpassword'
//   }
// });

// ...............generateseed import
//const {generateSeedData } = require('./_seed/index.js');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },
}
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  // async bootstrap({ strapi }) {

  //   console.log('running App bootstrap...')
  //   if (process.env.NODE_ENV === 'development') {
  //     console.log('the App is in the development mode!')
  //     console.log('running the development bootstrap...')

  //     await generateSeedData(strapi)

  //     // other DEVELOPMENT bootstrap functions
  //   }

    // general bootstrap functions

    //console.log('bootstrap function has finished successfully!')
    
    // to stop process after bootstrap
    // if (process.env.FORCE_APP_BOOTSTRAP_ONLY === 'true') {
    //   console.log('FORCE_APP_BOOTSTRAP_ONLY mode has been activated - exiting process prematurely.')
    //   process.exit(0)
    // }

    // if (process.env.FORCE_APP_BOOTSTRAP_ONLY === 'true') {
    //   console.log('FORCE_APP_BOOTSTRAP_ONLY mode has been activated - exiting process prematurely.')
    //   process.exit(0)
    // }



    // const consume_topic = async () => {
    //   // Consuming
    //   let consumer = kafka.consumer({ groupId: 'test-group' })
    //   if (!consumer) {
    //     consumer = kafka.consumer({ groupId: 'test-group' })
    //     await consumer.connect()

    //   } else {
    //     console.log("already subscribed")
    //   }
    //   try {
    //     await consumer.subscribe({ topic: 'topic1', fromBeginning: true })
    //     await consumer.subscribe({ topic: 'topic2', fromBeginning: true })
    //   } catch (error) {
    //     console.log("consumer subscribed")

    //   }


    //   await consumer.run({
    //     eachMessage: async ({ topic, partition, message }) => {
    //       // console.log("eachmessage is running")
    //       // console.log("not running")
          
    //       console.log(topic)
    //       const users = await strapi.db.query('api::ktopic.ktopic').findOne({ where: { ktopic_name: topic }, populate: true });
    //       console.log(users.subscribers)
    //       // const mailOptions = {
    //       //   from: 'yourgmailaccount@gmail.com',
    //       //   to: 'recipient@example.com',
    //       //   subject: 'Notification',
    //       //   text: 'This is a push notification!'
    //       // };
    //       // transporter.sendMail(mailOptions, function(error, info){
    //       //   if(error){
    //       //       console.log(error);
    //       //   }else{
    //       //       console.log('Email sent: ' + info.response);
    //       //   }
    //       // });
    //       console.log({
    //         partition,
    //         offset: message.offset,
    //         value: message.value.toString(),
    //       })
    //     },
    //   })
    // }

    // consume_topic().catch(console.error)
  

