import mongoose, { Document, Schema } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    tokens: { token: string }[];
    createdAt?: Date;
    updatedAt?: Date;
  }

  const userSchema: Schema<IUser> = new Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value: string) {
          if (!validator.isEmail(value)) {
            throw new Error('Email is invalid');
          }
        },
      },
      password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value: string) {
          if (value.toLowerCase().includes('password')) {
            throw new Error("Password mustn't contain 'password'");
          }
        },
      },
      tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );
  
  const User = mongoose.model<IUser>('User', userSchema);
  
  export default User;