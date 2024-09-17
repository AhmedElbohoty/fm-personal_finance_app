import { Balance, Transaction, Budget, Pot } from "types/data";

export type StateType = {
  balance: Balance;
  budgets: Record<Budget["id"], Budget>;
  transactions: Record<Transaction["id"], Transaction>;
  pots: Record<Pot["id"], Pot>;
  transactionsIds: Transaction["id"][];
  budgetsIds: Budget["id"][];
  potsIds: Pot["id"][];
  recurringBillsIds: string[];
};

const initialState: StateType = {
  balance: {
    current: 4836,
    income: 3814.25,
    expenses: 1700.5,
  },
  transactions: {
    "bb0dfe7a-4418-4641-b47f-dd66002c9429": {
      id: "bb0dfe7a-4418-4641-b47f-dd66002c9429",
      avatar: "/avatars/avatar_4.jpg",
      name: "Emma Richardson",
      category: "General",
      date: "2024-09-19T14:23:11Z",
      amount: 75.5,
      recurring: false,
    },
    "af9fca3a-6291-46eb-9fc2-38ae3698a717": {
      id: "af9fca3a-6291-46eb-9fc2-38ae3698a717",
      avatar: "/avatars/savory-bites-bistro.jpg",
      name: "Savory Bites Bistro",
      category: "Dining Out",
      date: "2024-09-19T20:23:11Z",
      amount: -55.5,
      recurring: false,
    },
    "b04ffdc2-c8e7-4d41-91a2-1c3e4cab95c8": {
      id: "b04ffdc2-c8e7-4d41-91a2-1c3e4cab95c8",
      avatar: "/avatars/avatar_0.jpg",
      name: "Daniel Carter",
      category: "General",
      date: "2024-09-18T09:45:32Z",
      amount: -42.3,
      recurring: false,
    },
    "571f7a10-5ed5-4289-8508-67a7608d8342": {
      id: "571f7a10-5ed5-4289-8508-67a7608d8342",
      avatar: "/avatars/avatar_3.jpg",
      name: "Sun Park",
      category: "General",
      date: "2024-09-17T16:12:05Z",
      amount: 120,
      recurring: false,
    },
    "199f8b71-a99f-4536-b865-0fa788d1a6f1": {
      id: "199f8b71-a99f-4536-b865-0fa788d1a6f1",
      avatar: "/avatars/urban-services-hub.jpg",
      name: "Urban Services Hub",
      category: "General",
      date: "2024-09-17T21:08:09Z",
      amount: -65,
      recurring: false,
    },
    "8a24673f-98de-4142-8aaa-7a76394392e0": {
      id: "8a24673f-98de-4142-8aaa-7a76394392e0",
      avatar: "/avatars/avatar_1.jpg",
      name: "Liam Hughes",
      category: "Groceries",
      date: "2024-09-15T18:20:33Z",
      amount: 65.75,
      recurring: false,
    },
    "1ac726c5-977a-4426-b528-8de59c190c2a": {
      id: "1ac726c5-977a-4426-b528-8de59c190c2a",
      avatar: "/avatars/avatar_2.jpg",
      name: "Lily Ramirez",
      category: "General",
      date: "2024-09-14T13:05:27Z",
      amount: 50,
      recurring: false,
    },
    "e45589e2-4b97-45f8-9605-2ca0719f3821": {
      id: "e45589e2-4b97-45f8-9605-2ca0719f3821",
      avatar: "/avatars/avatar_2.jpg",
      name: "Ethan Clark",
      category: "Dining Out",
      date: "2024-09-13T20:15:59Z",
      amount: -32.5,
      recurring: false,
    },
    "5e75ec3f-09fe-444c-9900-e1efedbcfe90": {
      id: "5e75ec3f-09fe-444c-9900-e1efedbcfe90",
      avatar: "/avatars/avatar_0.jpg",
      name: "James Thompson",
      category: "Entertainment",
      date: "2024-09-11T15:45:38Z",
      amount: -5,
      recurring: false,
    },
    "77f34e28-835c-4995-b4f1-788f1212bb8e": {
      id: "77f34e28-835c-4995-b4f1-788f1212bb8e",
      avatar: "/avatars/pixel-playground.jpg",
      name: "Pixel Playground",
      category: "Entertainment",
      date: "2024-09-11T18:45:38Z",
      amount: -10,
      recurring: true,
    },
    "5c87cac6-1cb5-4e90-8b27-6510a25f1c64": {
      id: "5c87cac6-1cb5-4e90-8b27-6510a25f1c64",
      avatar: "/avatars/avatar_1.jpg",
      name: "Ella Phillips",
      category: "Dining Out",
      date: "2024-09-10T19:22:51Z",
      amount: -45,
      recurring: false,
    },
    "3a36f365-1ae4-44e9-9903-a401ac65a171": {
      id: "3a36f365-1ae4-44e9-9903-a401ac65a171",
      avatar: "/avatars/avatar_2.jpg",
      name: "Sofia Peterson",
      category: "Transportation",
      date: "2024-09-08T08:55:17Z",
      amount: -15,
      recurring: false,
    },
    "88c78c29-726b-438f-a56a-9c2074e3a872": {
      id: "88c78c29-726b-438f-a56a-9c2074e3a872",
      avatar: "/avatars/avatar_3.jpg",
      name: "Mason Martinez",
      category: "Lifestyle",
      date: "2024-09-07T17:40:29Z",
      amount: -35.25,
      recurring: false,
    },
    "5f2e836c-9406-40f9-908a-a572043c2561": {
      id: "5f2e836c-9406-40f9-908a-a572043c2561",
      avatar: "/avatars/green-plate-eatery.jpg",
      name: "Green Plate Eatery",
      category: "Groceries",
      date: "2024-09-06T08:25:44Z",
      amount: -78.5,
      recurring: false,
    },
    "ec23f9b9-70e8-49fe-905f-1eb491a623b6": {
      id: "ec23f9b9-70e8-49fe-905f-1eb491a623b6",
      avatar: "/avatars/avatar_1.jpg",
      name: "Sebastian Cook",
      category: "Transportation",
      date: "2024-09-06T10:05:44Z",
      amount: -22.5,
      recurring: false,
    },
    "96faed9d-94b9-420a-8498-6c08d18e7b98": {
      id: "96faed9d-94b9-420a-8498-6c08d18e7b98",
      avatar: "/avatars/avatar_4.jpg",
      name: "William Harris",
      category: "Personal Care",
      date: "2024-09-05T14:30:56Z",
      amount: -10,
      recurring: false,
    },
    "05354f7b-c8f5-4665-a8fe-ddd4686f6831": {
      id: "05354f7b-c8f5-4665-a8fe-ddd4686f6831",
      avatar: "/avatars/elevate-education.jpg",
      name: "Elevate Education",
      category: "Education",
      date: "2024-09-04T11:15:22Z",
      amount: -50,
      recurring: true,
    },
    "c735af2d-d3fb-4727-9e95-206889037a74": {
      id: "c735af2d-d3fb-4727-9e95-206889037a74",
      avatar: "/avatars/serenity-spa-and-wellness.jpg",
      name: "Serenity Spa & Wellness",
      category: "Personal Care",
      date: "2024-09-03T14:00:37Z",
      amount: -30,
      recurring: true,
    },
    "1569ab9e-0c1d-4061-8f62-a552c09779b6": {
      id: "1569ab9e-0c1d-4061-8f62-a552c09779b6",
      avatar: "/avatars/spark-electric-solutions.jpg",
      name: "Spark Electric Solutions",
      category: "Bills",
      date: "2024-09-02T09:25:11Z",
      amount: -100,
      recurring: true,
    },
    "d191385c-09ba-4f8d-a037-3bc4f697fa2c": {
      id: "d191385c-09ba-4f8d-a037-3bc4f697fa2c",
      avatar: "/avatars/avatar_0.jpg",
      name: "Rina Sato",
      category: "Bills",
      date: "2024-09-02T13:31:11Z",
      amount: -50,
      recurring: false,
    },
    "64f16cca-5ced-4521-8905-a20ddb829fd1": {
      id: "64f16cca-5ced-4521-8905-a20ddb829fd1",
      avatar: "/avatars/swift-ride-share.jpg",
      name: "Swift Ride Share",
      category: "Transportation",
      date: "2024-09-01T18:40:33Z",
      amount: -18.75,
      recurring: false,
    },
    "a93ed15c-3f2d-4d8a-8c19-115f1184bcb7": {
      id: "a93ed15c-3f2d-4d8a-8c19-115f1184bcb7",
      avatar: "/avatars/aqua-flow-utilities.jpg",
      name: "Aqua Flow Utilities",
      category: "Bills",
      date: "2024-08-30T13:20:14Z",
      amount: -100,
      recurring: true,
    },
    "d8aa7685-d521-4137-9492-e84e2f22a157": {
      id: "d8aa7685-d521-4137-9492-e84e2f22a157",
      avatar: "/avatars/ecofuel-energy.jpg",
      name: "EcoFuel Energy",
      category: "Bills",
      date: "2024-08-29T11:55:29Z",
      amount: -35,
      recurring: true,
    },
    "a54c9e05-cdaa-4fad-9c74-cc145ec9136b": {
      id: "a54c9e05-cdaa-4fad-9c74-cc145ec9136b",
      avatar: "/avatars/avatar_0.jpg",
      name: "Yuna Kim",
      category: "Dining Out",
      date: "2024-08-29T13:51:29Z",
      amount: -28.5,
      recurring: false,
    },
    "6e55c33a-72ad-41c1-af23-9caa7e531bdd": {
      id: "6e55c33a-72ad-41c1-af23-9caa7e531bdd",
      avatar: "/avatars/flavor-fiesta.jpg",
      name: "Flavor Fiesta",
      category: "Dining Out",
      date: "2024-08-27T20:15:06Z",
      amount: -42.75,
      recurring: false,
    },
    "6f2b8016-7c2a-4574-b497-162a902510aa": {
      id: "6f2b8016-7c2a-4574-b497-162a902510aa",
      avatar: "/avatars/avatar_3.jpg",
      name: "Harper Edwards",
      category: "Shopping",
      date: "2024-08-26T09:43:23Z",
      amount: -89.99,
      recurring: false,
    },
    "86f1a0ed-4a18-47db-b4be-094dde6e3535": {
      id: "86f1a0ed-4a18-47db-b4be-094dde6e3535",
      avatar: "/avatars/buzz-marketing-group.jpg",
      name: "Buzz Marketing Group",
      category: "General",
      date: "2024-08-26T14:40:23Z",
      amount: 3358,
      recurring: false,
    },
    "dad456ec-2a3d-4f4d-958a-6712dcf57028": {
      id: "dad456ec-2a3d-4f4d-958a-6712dcf57028",
      avatar: "/avatars/technova-innovations.jpg",
      name: "TechNova Innovations",
      category: "Shopping",
      date: "2024-08-25T16:25:37Z",
      amount: -29.99,
      recurring: false,
    },
    "eb3a4f46-a1d3-4c29-828b-19cc7fe3516e": {
      id: "eb3a4f46-a1d3-4c29-828b-19cc7fe3516e",
      avatar: "/avatars/bytewise.jpg",
      name: "ByteWise",
      category: "Lifestyle",
      date: "2024-08-23T09:35:14Z",
      amount: -49.99,
      recurring: true,
    },
    "0ef6c9a2-81d2-4993-9c45-a68cc60d96b2": {
      id: "0ef6c9a2-81d2-4993-9c45-a68cc60d96b2",
      avatar: "/avatars/avatar_4.jpg",
      name: "Nimbus Data Storage",
      category: "Bills",
      date: "2024-08-21T10:05:42Z",
      amount: -9.99,
      recurring: true,
    },
    "78780bd0-dd57-4244-8af5-7f4638ca7c20": {
      id: "78780bd0-dd57-4244-8af5-7f4638ca7c20",
      avatar: "/avatars/avatar_4.jpg",
      name: "Emma Richardson",
      category: "General",
      date: "2024-08-20T17:30:55Z",
      amount: -25,
      recurring: false,
    },
    "f93b2f4f-daa9-4227-9b7a-6dea099e623e": {
      id: "f93b2f4f-daa9-4227-9b7a-6dea099e623e",
      avatar: "/avatars/avatar_0.jpg",
      name: "Daniel Carter",
      category: "General",
      date: "2024-08-19T12:45:09Z",
      amount: 50,
      recurring: false,
    },
    "ee26f2d5-9351-407b-9f81-342a85c7132b": {
      id: "ee26f2d5-9351-407b-9f81-342a85c7132b",
      avatar: "/avatars/avatar_3.jpg",
      name: "Sun Park",
      category: "General",
      date: "2024-08-18T19:20:23Z",
      amount: -38.5,
      recurring: false,
    },
    "48d36528-7b5a-4564-b215-0b0afa3822bc": {
      id: "48d36528-7b5a-4564-b215-0b0afa3822bc",
      avatar: "/avatars/avatar_3.jpg",
      name: "Harper Edwards",
      category: "Shopping",
      date: "2024-08-17T14:55:37Z",
      amount: -29.99,
      recurring: false,
    },
    "02cfd8ee-f4ac-4203-afc5-8697a1297938": {
      id: "02cfd8ee-f4ac-4203-afc5-8697a1297938",
      avatar: "/avatars/avatar_1.jpg",
      name: "Liam Hughes",
      category: "Groceries",
      date: "2024-08-16T10:10:51Z",
      amount: -52.75,
      recurring: false,
    },
    "0353650e-8649-4d43-9499-18f79375adc3": {
      id: "0353650e-8649-4d43-9499-18f79375adc3",
      avatar: "/avatars/avatar_2.jpg",
      name: "Lily Ramirez",
      category: "General",
      date: "2024-08-15T16:35:04Z",
      amount: 75,
      recurring: false,
    },
    "15df6696-7299-4a6b-afb9-6db6f8d587ed": {
      id: "15df6696-7299-4a6b-afb9-6db6f8d587ed",
      avatar: "/avatars/avatar_2.jpg",
      name: "Ethan Clark",
      category: "Dining Out",
      date: "2024-08-14T20:50:18Z",
      amount: -41.25,
      recurring: false,
    },
    "b302b2d6-9974-437f-b107-89c19d03ddb4": {
      id: "b302b2d6-9974-437f-b107-89c19d03ddb4",
      avatar: "/avatars/avatar_0.jpg",
      name: "Rina Sato",
      category: "Entertainment",
      date: "2024-08-13T09:15:32Z",
      amount: -10,
      recurring: false,
    },
    "e0821ced-6a9e-4158-aad8-574dfec54bcc": {
      id: "e0821ced-6a9e-4158-aad8-574dfec54bcc",
      avatar: "/avatars/avatar_0.jpg",
      name: "James Thompson",
      category: "Bills",
      date: "2024-08-12T13:40:46Z",
      amount: -95.5,
      recurring: false,
    },
    "c52c7c7d-ea00-4c9e-9ebe-5dfab7fb2079": {
      id: "c52c7c7d-ea00-4c9e-9ebe-5dfab7fb2079",
      avatar: "/avatars/avatar_1.jpg",
      name: "Ella Phillips",
      category: "Dining Out",
      date: "2024-08-11T18:05:59Z",
      amount: -33.75,
      recurring: false,
    },
    "8ecddbc4-6bd6-42d9-82de-4e14d935fc0d": {
      id: "8ecddbc4-6bd6-42d9-82de-4e14d935fc0d",
      avatar: "/avatars/avatar_0.jpg",
      name: "Yuna Kim",
      category: "Dining Out",
      date: "2024-08-10T12:30:13Z",
      amount: -27.5,
      recurring: false,
    },
    "3bac2c03-8b5a-4d26-ae7d-d75dd1c168a0": {
      id: "3bac2c03-8b5a-4d26-ae7d-d75dd1c168a0",
      avatar: "/avatars/avatar_2.jpg",
      name: "Sofia Peterson",
      category: "Transportation",
      date: "2024-08-09T08:55:27Z",
      amount: -12.5,
      recurring: false,
    },
    "3eaa5b96-43d3-488f-b2fb-3912cf4dec85": {
      id: "3eaa5b96-43d3-488f-b2fb-3912cf4dec85",
      avatar: "/avatars/avatar_3.jpg",
      name: "Mason Martinez",
      category: "Lifestyle",
      date: "2024-08-08T15:20:41Z",
      amount: -65,
      recurring: false,
    },
    "549b12b6-58c5-4e5d-9a8b-49ce2cefbf48": {
      id: "549b12b6-58c5-4e5d-9a8b-49ce2cefbf48",
      avatar: "/avatars/avatar_1.jpg",
      name: "Sebastian Cook",
      category: "Transportation",
      date: "2024-08-07T11:45:55Z",
      amount: -20,
      recurring: false,
    },
    "06b007a8-33bc-425d-94a5-457c61f7343b": {
      id: "06b007a8-33bc-425d-94a5-457c61f7343b",
      avatar: "/avatars/avatar_4.jpg",
      name: "William Harris",
      category: "General",
      date: "2024-08-06T17:10:09Z",
      amount: 20,
      recurring: false,
    },
    "9d980e2b-1bb2-49ce-8258-5f35c1d5dc39": {
      id: "9d980e2b-1bb2-49ce-8258-5f35c1d5dc39",
      avatar: "/avatars/elevate-education.jpg",
      name: "Elevate Education",
      category: "Education",
      date: "2024-08-05T11:15:22Z",
      amount: -50,
      recurring: true,
    },
    "59ebc1e3-15ab-4d65-bfc0-7a5084daab8d": {
      id: "59ebc1e3-15ab-4d65-bfc0-7a5084daab8d",
      avatar: "/avatars/serenity-spa-and-wellness.jpg",
      name: "Serenity Spa & Wellness",
      category: "Personal Care",
      date: "2024-08-03T14:00:37Z",
      amount: -30,
      recurring: true,
    },
    "887f5c2d-3f15-49d3-92cd-b2d816ac8929": {
      id: "887f5c2d-3f15-49d3-92cd-b2d816ac8929",
      avatar: "/avatars/spark-electric-solutions.jpg",
      name: "Spark Electric Solutions",
      category: "Bills",
      date: "2024-08-02T09:25:51Z",
      amount: -100,
      recurring: true,
    },
    "7948b7a5-2094-45cc-858a-33001b7b5da0": {
      id: "7948b7a5-2094-45cc-858a-33001b7b5da0",
      avatar: "/avatars/swift-ride-share.jpg",
      name: "Swift Ride Share",
      category: "Transportation",
      date: "2024-08-02T19:50:05Z",
      amount: -16.5,
      recurring: false,
    },
  },
  budgets: {
    "5bfdc27f-4ab0-409c-8783-38e50190b42a": {
      id: "5bfdc27f-4ab0-409c-8783-38e50190b42a",
      category: "Entertainment",
      maximum: 50,
      theme: "#277C78",
    },
    "93f61ff0-8e75-41a1-851f-73c288f1fca3": {
      id: "93f61ff0-8e75-41a1-851f-73c288f1fca3",
      category: "Bills",
      maximum: 750,
      theme: "#82C9D7",
    },
    "7873c45c-ea8e-4fba-a483-5cc058ebcfed": {
      id: "7873c45c-ea8e-4fba-a483-5cc058ebcfed",
      category: "Dining Out",
      maximum: 75,
      theme: "#F2CDAC",
    },
    "6d00aee4-7a2a-41ef-992a-53a46a6411d2": {
      id: "6d00aee4-7a2a-41ef-992a-53a46a6411d2",
      category: "Personal Care",
      maximum: 100,
      theme: "#626070",
    },
  },
  pots: {
    "908a578f-2dd7-4fc2-a797-d6410a2ef77f": {
      id: "908a578f-2dd7-4fc2-a797-d6410a2ef77f",
      name: "Savings",
      target: 2000,
      total: 159,
      theme: "#277C78",
    },
    "51b5bf94-9f34-4289-9870-4f653af602f7": {
      id: "51b5bf94-9f34-4289-9870-4f653af602f7",
      name: "Concert Ticket",
      target: 150,
      total: 110,
      theme: "#626070",
    },
    "4001c78e-357d-40d4-aae4-5ec4a7ee4c69": {
      id: "4001c78e-357d-40d4-aae4-5ec4a7ee4c69",
      name: "Gift",
      target: 60,
      total: 40,
      theme: "#82C9D7",
    },
    "300a386a-c336-43f7-a93c-4717d8c22a98": {
      id: "300a386a-c336-43f7-a93c-4717d8c22a98",
      name: "New Laptop",
      target: 1000,
      total: 10,
      theme: "#F2CDAC",
    },
    "190df543-b721-4211-8b42-f4229a6d8d1c": {
      id: "190df543-b721-4211-8b42-f4229a6d8d1c",
      name: "Holiday",
      target: 1440,
      total: 531,
      theme: "#826CB0",
    },
  },
  transactionsIds: [
    "bb0dfe7a-4418-4641-b47f-dd66002c9429",
    "af9fca3a-6291-46eb-9fc2-38ae3698a717",
    "b04ffdc2-c8e7-4d41-91a2-1c3e4cab95c8",
    "571f7a10-5ed5-4289-8508-67a7608d8342",
    "199f8b71-a99f-4536-b865-0fa788d1a6f1",
    "8a24673f-98de-4142-8aaa-7a76394392e0",
    "1ac726c5-977a-4426-b528-8de59c190c2a",
    "e45589e2-4b97-45f8-9605-2ca0719f3821",
    "5e75ec3f-09fe-444c-9900-e1efedbcfe90",
    "77f34e28-835c-4995-b4f1-788f1212bb8e",
    "5c87cac6-1cb5-4e90-8b27-6510a25f1c64",
    "3a36f365-1ae4-44e9-9903-a401ac65a171",
    "88c78c29-726b-438f-a56a-9c2074e3a872",
    "5f2e836c-9406-40f9-908a-a572043c2561",
    "ec23f9b9-70e8-49fe-905f-1eb491a623b6",
    "96faed9d-94b9-420a-8498-6c08d18e7b98",
    "05354f7b-c8f5-4665-a8fe-ddd4686f6831",
    "c735af2d-d3fb-4727-9e95-206889037a74",
    "1569ab9e-0c1d-4061-8f62-a552c09779b6",
    "d191385c-09ba-4f8d-a037-3bc4f697fa2c",
    "64f16cca-5ced-4521-8905-a20ddb829fd1",
    "a93ed15c-3f2d-4d8a-8c19-115f1184bcb7",
    "d8aa7685-d521-4137-9492-e84e2f22a157",
    "a54c9e05-cdaa-4fad-9c74-cc145ec9136b",
    "6e55c33a-72ad-41c1-af23-9caa7e531bdd",
    "6f2b8016-7c2a-4574-b497-162a902510aa",
    "86f1a0ed-4a18-47db-b4be-094dde6e3535",
    "dad456ec-2a3d-4f4d-958a-6712dcf57028",
    "eb3a4f46-a1d3-4c29-828b-19cc7fe3516e",
    "0ef6c9a2-81d2-4993-9c45-a68cc60d96b2",
    "78780bd0-dd57-4244-8af5-7f4638ca7c20",
    "f93b2f4f-daa9-4227-9b7a-6dea099e623e",
    "ee26f2d5-9351-407b-9f81-342a85c7132b",
    "48d36528-7b5a-4564-b215-0b0afa3822bc",
    "02cfd8ee-f4ac-4203-afc5-8697a1297938",
    "0353650e-8649-4d43-9499-18f79375adc3",
    "15df6696-7299-4a6b-afb9-6db6f8d587ed",
    "b302b2d6-9974-437f-b107-89c19d03ddb4",
    "e0821ced-6a9e-4158-aad8-574dfec54bcc",
    "c52c7c7d-ea00-4c9e-9ebe-5dfab7fb2079",
    "8ecddbc4-6bd6-42d9-82de-4e14d935fc0d",
    "3bac2c03-8b5a-4d26-ae7d-d75dd1c168a0",
    "3eaa5b96-43d3-488f-b2fb-3912cf4dec85",
    "549b12b6-58c5-4e5d-9a8b-49ce2cefbf48",
    "06b007a8-33bc-425d-94a5-457c61f7343b",
    "9d980e2b-1bb2-49ce-8258-5f35c1d5dc39",
    "59ebc1e3-15ab-4d65-bfc0-7a5084daab8d",
    "887f5c2d-3f15-49d3-92cd-b2d816ac8929",
    "7948b7a5-2094-45cc-858a-33001b7b5da0",
  ],
  budgetsIds: [
    "5bfdc27f-4ab0-409c-8783-38e50190b42a",
    "93f61ff0-8e75-41a1-851f-73c288f1fca3",
    "7873c45c-ea8e-4fba-a483-5cc058ebcfed",
    "6d00aee4-7a2a-41ef-992a-53a46a6411d2",
  ],
  potsIds: [
    "908a578f-2dd7-4fc2-a797-d6410a2ef77f",
    "51b5bf94-9f34-4289-9870-4f653af602f7",
    "4001c78e-357d-40d4-aae4-5ec4a7ee4c69",
    "300a386a-c336-43f7-a93c-4717d8c22a98",
    "190df543-b721-4211-8b42-f4229a6d8d1c",
  ],
  recurringBillsIds: [
    "77f34e28-835c-4995-b4f1-788f1212bb8e",
    "05354f7b-c8f5-4665-a8fe-ddd4686f6831",
    "c735af2d-d3fb-4727-9e95-206889037a74",
    "1569ab9e-0c1d-4061-8f62-a552c09779b6",
    "a93ed15c-3f2d-4d8a-8c19-115f1184bcb7",
    "d8aa7685-d521-4137-9492-e84e2f22a157",
    "eb3a4f46-a1d3-4c29-828b-19cc7fe3516e",
    "0ef6c9a2-81d2-4993-9c45-a68cc60d96b2",
    "9d980e2b-1bb2-49ce-8258-5f35c1d5dc39",
    "59ebc1e3-15ab-4d65-bfc0-7a5084daab8d",
    "887f5c2d-3f15-49d3-92cd-b2d816ac8929",
  ],
};

export default initialState;
