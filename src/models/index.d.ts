import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly name: string;
  readonly users?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Company, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly name: string;
  readonly users: AsyncCollection<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Company = LazyLoading extends LazyLoadingDisabled ? EagerCompany : LazyCompany

export declare const Company: (new (init: ModelInit<Company>) => Company) & {
  copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly email: string;
  readonly slackId: string;
  readonly managerId?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly company?: Company | null;
  readonly companyId: string;
  readonly surveys?: (Survey | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyUsersId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly email: string;
  readonly slackId: string;
  readonly managerId?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly company: AsyncItem<Company | undefined>;
  readonly companyId: string;
  readonly surveys: AsyncCollection<Survey>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly companyUsersId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerSurvey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Survey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly user?: User | null;
  readonly userEmail: string;
  readonly buttonInput?: number | null;
  readonly categoryIndex?: number | null;
  readonly questionIndex?: number | null;
  readonly scrollInput?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSurveysId?: string | null;
}

type LazySurvey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Survey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly user: AsyncItem<User | undefined>;
  readonly userEmail: string;
  readonly buttonInput?: number | null;
  readonly categoryIndex?: number | null;
  readonly questionIndex?: number | null;
  readonly scrollInput?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSurveysId?: string | null;
}

export declare type Survey = LazyLoading extends LazyLoadingDisabled ? EagerSurvey : LazySurvey

export declare const Survey: (new (init: ModelInit<Survey>) => Survey) & {
  copyOf(source: Survey, mutator: (draft: MutableModel<Survey>) => MutableModel<Survey> | void): Survey;
}

type EagerMentalHealthMarker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MentalHealthMarker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly categoryIndex?: number | null;
  readonly questionIndex?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMentalHealthMarker = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MentalHealthMarker, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly categoryIndex?: number | null;
  readonly questionIndex?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MentalHealthMarker = LazyLoading extends LazyLoadingDisabled ? EagerMentalHealthMarker : LazyMentalHealthMarker

export declare const MentalHealthMarker: (new (init: ModelInit<MentalHealthMarker>) => MentalHealthMarker) & {
  copyOf(source: MentalHealthMarker, mutator: (draft: MutableModel<MentalHealthMarker>) => MutableModel<MentalHealthMarker> | void): MentalHealthMarker;
}

type EagerGoogleToken = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GoogleToken, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly userEmail: string;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expirationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoogleToken = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GoogleToken, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly userEmail: string;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expirationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GoogleToken = LazyLoading extends LazyLoadingDisabled ? EagerGoogleToken : LazyGoogleToken

export declare const GoogleToken: (new (init: ModelInit<GoogleToken>) => GoogleToken) & {
  copyOf(source: GoogleToken, mutator: (draft: MutableModel<GoogleToken>) => MutableModel<GoogleToken> | void): GoogleToken;
}

type EagerTeamsToken = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamsToken, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly userEmail: string;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expirationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamsToken = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamsToken, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly userEmail: string;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expirationDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamsToken = LazyLoading extends LazyLoadingDisabled ? EagerTeamsToken : LazyTeamsToken

export declare const TeamsToken: (new (init: ModelInit<TeamsToken>) => TeamsToken) & {
  copyOf(source: TeamsToken, mutator: (draft: MutableModel<TeamsToken>) => MutableModel<TeamsToken> | void): TeamsToken;
}

type EagerStressFactorRawData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StressFactorRawData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly userEmail: string;
  readonly featureId: string;
  readonly value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStressFactorRawData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StressFactorRawData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly userEmail: string;
  readonly featureId: string;
  readonly value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StressFactorRawData = LazyLoading extends LazyLoadingDisabled ? EagerStressFactorRawData : LazyStressFactorRawData

export declare const StressFactorRawData: (new (init: ModelInit<StressFactorRawData>) => StressFactorRawData) & {
  copyOf(source: StressFactorRawData, mutator: (draft: MutableModel<StressFactorRawData>) => MutableModel<StressFactorRawData> | void): StressFactorRawData;
}

type EagerStressFactorFeature = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StressFactorFeature, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dataPoint: string;
  readonly source: string;
  readonly stressFactor: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStressFactorFeature = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StressFactorFeature, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dataPoint: string;
  readonly source: string;
  readonly stressFactor: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StressFactorFeature = LazyLoading extends LazyLoadingDisabled ? EagerStressFactorFeature : LazyStressFactorFeature

export declare const StressFactorFeature: (new (init: ModelInit<StressFactorFeature>) => StressFactorFeature) & {
  copyOf(source: StressFactorFeature, mutator: (draft: MutableModel<StressFactorFeature>) => MutableModel<StressFactorFeature> | void): StressFactorFeature;
}

type EagerStressFactorLookUp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StressFactorLookUp, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weight: number;
  readonly range10: string;
  readonly range8: string;
  readonly range6: string;
  readonly range4: string;
  readonly range2: string;
  readonly range0: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStressFactorLookUp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StressFactorLookUp, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weight: number;
  readonly range10: string;
  readonly range8: string;
  readonly range6: string;
  readonly range4: string;
  readonly range2: string;
  readonly range0: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StressFactorLookUp = LazyLoading extends LazyLoadingDisabled ? EagerStressFactorLookUp : LazyStressFactorLookUp

export declare const StressFactorLookUp: (new (init: ModelInit<StressFactorLookUp>) => StressFactorLookUp) & {
  copyOf(source: StressFactorLookUp, mutator: (draft: MutableModel<StressFactorLookUp>) => MutableModel<StressFactorLookUp> | void): StressFactorLookUp;
}

type EagerStressFactorMappedData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StressFactorMappedData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly userEmail: string;
  readonly featureId: string;
  readonly value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStressFactorMappedData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StressFactorMappedData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate?: string | null;
  readonly userEmail: string;
  readonly featureId: string;
  readonly value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StressFactorMappedData = LazyLoading extends LazyLoadingDisabled ? EagerStressFactorMappedData : LazyStressFactorMappedData

export declare const StressFactorMappedData: (new (init: ModelInit<StressFactorMappedData>) => StressFactorMappedData) & {
  copyOf(source: StressFactorMappedData, mutator: (draft: MutableModel<StressFactorMappedData>) => MutableModel<StressFactorMappedData> | void): StressFactorMappedData;
}

type EagerWellBeingScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WellBeingScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly wellbeingScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWellBeingScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WellBeingScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly wellbeingScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WellBeingScore = LazyLoading extends LazyLoadingDisabled ? EagerWellBeingScore : LazyWellBeingScore

export declare const WellBeingScore: (new (init: ModelInit<WellBeingScore>) => WellBeingScore) & {
  copyOf(source: WellBeingScore, mutator: (draft: MutableModel<WellBeingScore>) => MutableModel<WellBeingScore> | void): WellBeingScore;
}

type EagerWorkloadScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkloadScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkloadScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WorkloadScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WorkloadScore = LazyLoading extends LazyLoadingDisabled ? EagerWorkloadScore : LazyWorkloadScore

export declare const WorkloadScore: (new (init: ModelInit<WorkloadScore>) => WorkloadScore) & {
  copyOf(source: WorkloadScore, mutator: (draft: MutableModel<WorkloadScore>) => MutableModel<WorkloadScore> | void): WorkloadScore;
}

type EagerAutonomyScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AutonomyScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAutonomyScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AutonomyScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AutonomyScore = LazyLoading extends LazyLoadingDisabled ? EagerAutonomyScore : LazyAutonomyScore

export declare const AutonomyScore: (new (init: ModelInit<AutonomyScore>) => AutonomyScore) & {
  copyOf(source: AutonomyScore, mutator: (draft: MutableModel<AutonomyScore>) => MutableModel<AutonomyScore> | void): AutonomyScore;
}

type EagerCommunicationScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommunicationScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCommunicationScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CommunicationScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CommunicationScore = LazyLoading extends LazyLoadingDisabled ? EagerCommunicationScore : LazyCommunicationScore

export declare const CommunicationScore: (new (init: ModelInit<CommunicationScore>) => CommunicationScore) & {
  copyOf(source: CommunicationScore, mutator: (draft: MutableModel<CommunicationScore>) => MutableModel<CommunicationScore> | void): CommunicationScore;
}

type EagerRelationshipsScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RelationshipsScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRelationshipsScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RelationshipsScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RelationshipsScore = LazyLoading extends LazyLoadingDisabled ? EagerRelationshipsScore : LazyRelationshipsScore

export declare const RelationshipsScore: (new (init: ModelInit<RelationshipsScore>) => RelationshipsScore) & {
  copyOf(source: RelationshipsScore, mutator: (draft: MutableModel<RelationshipsScore>) => MutableModel<RelationshipsScore> | void): RelationshipsScore;
}

type EagerTimeBoundariesScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TimeBoundariesScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimeBoundariesScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TimeBoundariesScore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdDate: string;
  readonly userEmail: string;
  readonly workloadScore: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TimeBoundariesScore = LazyLoading extends LazyLoadingDisabled ? EagerTimeBoundariesScore : LazyTimeBoundariesScore

export declare const TimeBoundariesScore: (new (init: ModelInit<TimeBoundariesScore>) => TimeBoundariesScore) & {
  copyOf(source: TimeBoundariesScore, mutator: (draft: MutableModel<TimeBoundariesScore>) => MutableModel<TimeBoundariesScore> | void): TimeBoundariesScore;
}