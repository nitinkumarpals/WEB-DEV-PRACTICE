import { Router } from "express";
export const adminRouter = Router();
import { adminModel, courseModel } from "../../db/db";
import { signupSchema } from "../../schema/signupSchema";
adminRouter.post("/signup", async function (req, res) {
  try {
    const body = req.body;
    const parsedBody = signupSchema.safeParse(body);
    if (!parsedBody.success) {
      const errorMessages = parsedBody.error.errors
        .map((err) => err.message)
        .join(", ");
      return res.status(400).json({
        success: false,
        message: errorMessages,
      });
    }
    const { email, password, firstName, lastName } = parsedBody.data;
    const admin = await adminModel.create({
      email,
      password,
      firstName,
      lastName,
    });
    // Create a new course document with the creatorId set to the adminId
    const course = await courseModel.create({
      title: "Default Course Title",
      description: "Default Course Description",
      price: 0,
      imageUrl: "",
      creatorId: admin._id,
    });
    res.status(200).json({
      admin,
      course,
      message: "Admin and course created successfully",
    });
  } catch (error : Error | any) {
    if (error instanceof Error && (error as any).code === 11000) {
      // Unique constraint error code
      return res.status(400).json({
        success: false,
        error: "Email already exists",
        message: "Email already in use",
      });
    } else {
      // Handle other errors
      return res.status(500).json({
        success: false,
        error: error.message,
        message: "Internal server error",
      });
    }
  }
});

adminRouter.get("/signin", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.put("/course", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

adminRouter.get("/course/bulk", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});
