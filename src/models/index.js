// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Company, User, Survey, MentalHealthMarker, GoogleToken, TeamsToken, StressFactorRawData, StressFactorFeature, StressFactorLookUp, StressFactorMappedData, WellBeingScore, WorkloadScore, AutonomyScore, CommunicationScore, RelationshipsScore, TimeBoundariesScore } = initSchema(schema);

export {
  Company,
  User,
  Survey,
  MentalHealthMarker,
  GoogleToken,
  TeamsToken,
  StressFactorRawData,
  StressFactorFeature,
  StressFactorLookUp,
  StressFactorMappedData,
  WellBeingScore,
  WorkloadScore,
  AutonomyScore,
  CommunicationScore,
  RelationshipsScore,
  TimeBoundariesScore
};