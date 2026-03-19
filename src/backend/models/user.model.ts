import mongoose, { Schema, Model } from "mongoose";
import { IUserSchema } from "@/backend/types/user.types";

const UserSchema: Schema<IUserSchema> = new Schema(
    {
            firstName: { type: String, required: true, trim: true },
            lastName: { type: String, required: true, trim: true },

            email: {
                    type: String,
                    required: true,
                    unique: true,
                    lowercase: true,
                    index: true,
            },

            password: { type: String, required: true, select: false },

            phoneNumber: { type: String, required: false, trim: true },
            phone: { type: String, required: false, trim: true },

            dateOfBirth: { type: Date, required: false },
            birthDate: { type: Date, required: false },

            address: {
                    street: { type: String, required: true, trim: true },
                    city: { type: String, required: true, trim: true },
                    country: { type: String, required: true, trim: true },
                    postCode: { type: String, required: false, trim: true },
                    zip: { type: String, required: false, trim: true },
            },

            role: { type: String, enum: ["user", "admin"], default: "user" },
            tokens: { type: Number, default: 10 },
    },
    { timestamps: true }
);

UserSchema.pre("validate", function syncRegistrationFields(next) {
    this.phoneNumber = this.phoneNumber?.trim() || this.phone?.trim() || "";
    this.phone = this.phoneNumber;

    this.dateOfBirth = this.dateOfBirth || this.birthDate;
    this.birthDate = this.dateOfBirth;

    this.address = this.address || { street: "", city: "", country: "", postCode: "", zip: "" };
    this.address.street = this.address.street?.trim() || "";
    this.address.city = this.address.city?.trim() || "";
    this.address.country = this.address.country?.trim() || "";
    this.address.postCode = this.address.postCode?.trim() || this.address.zip?.trim() || "";
    this.address.zip = this.address.postCode;

    if (!this.phoneNumber) this.invalidate("phoneNumber", "Phone number is required");
    if (!this.dateOfBirth || Number.isNaN(this.dateOfBirth.getTime())) {
        this.invalidate("dateOfBirth", "Date of birth is required");
    }
    if (!this.address.postCode) this.invalidate("address.postCode", "Post code is required");

    next();
});

export const User: Model<IUserSchema> =
    mongoose.models.User || mongoose.model<IUserSchema>("User", UserSchema);
