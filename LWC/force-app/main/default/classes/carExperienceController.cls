public with sharing class carExperienceController {
   @AuraEnabled
   public static List<Car_Experience__c> getCarExp(String carId){
       return [SELECT Id,Name, Experience__c,
       LastModifiedDate,
       CreatedDate,
       CreatedBy.Name,
       CreatedBy.SmallPhotoUrl,
       CreatedBy.CompanyName FROM Car_Experience__c where
       Car__c=:carId
       ORDER BY CreatedDate DESC];
   }
}
