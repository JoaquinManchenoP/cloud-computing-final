import AWS from "aws-sdk";

AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIAWCF2PMDBIJVVZTG7",
  secretAccessKey: "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",
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

//Read All items from the database
export const getAllItems = async () => {
  const tableName = "cloud_table";

  const scanParams = {
    TableName: tableName,
  };

  try {
    const data = await dynamodb.scan(scanParams).promise();
    return data.Items;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

//Add an item to the database
export const addItem = async (inputValue) => {
  const tableName = "cloud_table";

  const item = {
    person_name: inputValue,
    person_last_name: inputValue,
  };

  const putParams = {
    TableName: tableName,
    Item: item,
  };

  try {
    await dynamodb.put(putParams).promise();
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};

//Delete an item from the database

export const deleteItem = async (name) => {
  const tableName = "cloud_table";
  const nameInTable = name.toString();

  const deleteParams = {
    TableName: tableName,
    Key: {
      "person_name": {
        "S": nameInTable,
      },
    },
  };

  console.log(deleteParams);

  try {
    await dynamodb.delete(deleteParams).promise();
    console.log("Item deleted successfully");
  } catch (error) {
    console.error("Error deleting item:", error);
    console.error("Stack trace:", error.stack);
    throw error;
  }
};
