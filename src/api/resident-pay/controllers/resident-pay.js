'use strict';
const stripe = require("stripe")("sk_test_51JTzmlIUUyTPZHVWFSCtjXUqrrXc3cVQxvwOREgwNiV7IaGGwY3DNreTaSZQd2TYqyjE1MgH9a4Gr1EXQRe8NnHJ00Ux6jAPbt");

/**
 *  resident-pay controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::resident-pay.resident-pay');


module.exports = createCoreController('api::resident-pay.resident-pay', ({ strapi }) =>  ({
  
    async create(ctx) {
    
     //createCoreController('api::resident-pay.resident-pay');


     const { auth,formData,amount,strapitoken,user,comments,month,year,catPaid,SelectedAmenity,resultPago,dateTimeReservation } = ctx.request.body;

        console.log(SelectedAmenity);
    //  console.log(user);
    //  console.log('strapitoken ' + strapitoken);

     if(strapitoken)
     {
         if(strapitoken.length > 0)
         {
           const charge = await stripe.charges.create({
             amount: (parseFloat(amount).toFixed(2) * 100).toFixed(0), //totalPayment * 100,
             currency: "mxn",
             source: strapitoken,
             description: `ID Usuario: ${user.id} UserName: ${user.username} Concepto: ${catPaid.TypePay}` ,
           });
         }
     }
     //console.log(SelectedAmenity);


     //if reservation

     let entryReservation;

     const createPay = [];

     let data = undefined;

     if(catPaid.attributes.TypePay === 'Reservacion')
     {
        //  console.log(dateTimeReservation);
        //  console.log(SelectedAmenity);

        // let tmpAmenity = {
        //     id : SelectedAmenity.id,
        //     Amenidad: SelectedAmenity.attributes.Amenidad,
        //     Active: SelectedAmenity.attributes.Active,
        //     createdAt: SelectedAmenity.attributes.createdAt,
        //     updatedAt: SelectedAmenity.attributes.updatedAt,
        //     publishedAt: SelectedAmenity.attributes.publishedAt



        // }

        //console.log(createPay);

        // let TMPresiden_Pay = { data : {
        //     id : createPay[0].id,
        //     attributes : {

        //         Amount: createPay[0].Amount,
        //         Year: createPay[0].Year,
        //         Month: createPay[0].Month,
        //         IsPaid: createPay[0].IsPaid,
        //         Comments: createPay[0].Comments,
        //         createdAt: createPay[0].createdAt,
        //         updatedAt: createPay[0].updatedAt

        //     }

        //  }
        // }


         let dataReservation ={ data : {

             DateTimeReservation : dateTimeReservation.value.toString("YYYY-MM-DD"),
             User : user,
             //'resident_pays (0)' : TMPresiden_Pay,
             Amenity : SelectedAmenity
         }
        }

         //console.log(dataReservation);

        //  const validDataReservation = await strapi.entityValidator.validateEntityCreation(
        //      strapi.models.reservation_pay,
        //      dataReservation
        //  );

         entryReservation = await strapi.db.query("api::reservation-pay.reservation-pay").create(dataReservation);

         console.log(entryReservation);



         data = { data : {
            Amount : amount,
            Year : catPaid.attributes.TypePay === 'Reservacion' ? 0 : year,
            Month : catPaid.attributes.TypePay === 'Reservacion' ? 0 : month,
            Comments : comments,
            User : user,
            'catalog_pay' : catPaid,
            'publishedAt': new Date(),
            'reservation_pay' : entryReservation && entryReservation 
            //,
            //Amenity : SelectedAmenity
        }
        
       }


     }
else
{

    data = { data : {
        Amount : amount,
        Year : catPaid.attributes.TypePay === 'Reservacion' ? 0 : year,
        Month : catPaid.attributes.TypePay === 'Reservacion' ? 0 : month,
        Comments : comments,
        User : user,
        'catalog_pay' : catPaid,
        'publishedAt': new Date()
        //'reservation_pay' : entryReservation && entryReservation 
        //,
        //Amenity : SelectedAmenity
    }
    
   }
}

     //console.log(catPaid[0]);
     
     console.log(data);

    //  const validData = await strapi.entityValidator.validateEntityCreation(
    //     "api::resident-pay.resident-pay",
    //      data
    //  );

     //console.log(validData);

     //const entry = await strapi.query("resident-pay").create(validData);

    //console.log(data);

     const entry = await strapi.db.query("api::resident-pay.resident-pay").create(data);
     createPay.push(entry);


    //console.log(catPaid.attributes.TypePay);

    





     return createPay;

    }

    }));


// module.exports = {

    

    // async create(ctx)
    // {

    //     //createCoreController('api::resident-pay.resident-pay');


    //     const { auth,formData,amount,strapitoken,user,comments,month,year,catPaid,SelectedAmenity,resultPago,dateTimeReservation } = ctx.request.body;

    //     console.log(user);
    //     console.log('strapitoken ' + strapitoken);

    //     if(strapitoken)
    //     {
    //         if(strapitoken.length > 0)
    //         {
    //           const charge = await stripe.charges.create({
    //             amount: (parseFloat(amount).toFixed(2) * 100).toFixed(0), //totalPayment * 100,
    //             currency: "mxn",
    //             source: strapitoken,
    //             description: `ID Usuario: ${user.id} UserName: ${user.username} Concepto: ${catPaid.TypePay}` ,
    //           });
    //         }
    //     }
    //     //console.log(SelectedAmenity);

    //     const createPay = [];

    //     let data = {

    //         Amount : amount,
    //         Year : catPaid.TypePay === 'Reservacion' ? 0 : year,
    //         Month : catPaid.TypePay === 'Reservacion' ? 0 : month,
    //         Comments : comments,
    //         User : user,
    //         'catalog_pay' : catPaid //,
    //         //Amenity : SelectedAmenity
    //     }

    //     //console.log(catPaid[0]);

    //     const validData = await strapi.entityValidator.validateEntityCreation(
    //         strapi.models.resident_pay,
    //         data
    //     );

    //     //console.log(validData);

    //     const entry = await strapi.query("resident-pay").create(validData);
    //     createPay.push(entry);


    //     if(catPaid.TypePay === 'Reservacion')
    //     {
    //         let dataReservation = {

    //             DateTimeReservation : dateTimeReservation.value,
    //             User : user,
    //             'resident_pays' : createPay,
    //             Amenity : SelectedAmenity
    //         }

    //         //console.log(dataReservation);

    //         const validDataReservation = await strapi.entityValidator.validateEntityCreation(
    //             strapi.models.reservation_pay,
    //             dataReservation
    //         );

    //         const entryReservation = await strapi.query("reservation-pay").create(validDataReservation);
    //     }
    //     return createPay;

    // }


// };



