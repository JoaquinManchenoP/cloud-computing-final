// import AWS from 'aws-sdk';

// const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

// export default function DynamoDBPage() {
//   const fetchItems = async () => {
//     const params = {
//       TableName: 'cloud_final_project',
//     };

//     try {
//       const response = await dynamoDB.scan(params).promise();

//       const items = response.Items;
//       console.log(items); // Display items in the console
//       // Use the items in your application as needed
//     } catch (error) {
//       console.error('Error fetching items from DynamoDB:', error);
//     }
//   };

//   // Fetch items when the page loads
//   fetchItems();

//   return <div>DynamoDB Page</div>;
// }
