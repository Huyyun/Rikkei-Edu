const db = require("../config/database");
const _ = require('lodash');

module.exports.getAllJobs = async function () {
    try {
        let result = await db("jobs as j")
            .join("jobskills as s", "s.jobId", "j.jobId")
            .join("jobcategories as c", "c.jobId", "j.jobId")
            .join("companies as cp", "cp.companyId", "j.companyId")
            .join("joblocations as l", "l.jobId", "j.jobId")
            .join("jobbenefits as b", "b.jobId", "j.jobId")
            .select("*");

        // Sử dụng lodash groupBy để nhóm theo jobId
        let groupedJobs = _.groupBy(result, 'jobId');

        // Dùng map để tái cấu trúc dữ liệu
        let jobs = _.map(groupedJobs, (items, jobId) => {
            // Lấy phần tử đầu tiên làm mẫu chung
            const baseInfo = items[0];
            return {
                jobId: baseInfo.jobId,
                jobTitle: baseInfo.jobTitle,
                jobDescription: baseInfo.jobDescription,
                jobRequirement: baseInfo.jobRequirement,
                salaryMin: baseInfo.salaryMin,
                salaryMax: baseInfo.salaryMax,
                skills: _.uniq(items.map(i => i.skill)), // loại bỏ trùng lặp skill
                category: baseInfo.category,
                location: baseInfo.location,
                company: {
                    companyId: baseInfo.companyId,
                    name: baseInfo.name,
                    logo: baseInfo.logo,
                },
                benefits: _.uniqBy(items.map(i => ({
                    benefitName: i.benefitName,
                    benefitValue: i.benefitValue
                })), 'benefitName') // loại bỏ trùng lặp benefit
            };
        });
        return jobs;
    } catch (error) {
        throw error;
    }
};

module.exports.getOneJob = async function (req) {
    try {
        let id = req.params.id;
        let result = await db("jobs as j")
            .join("jobskills as s", "s.jobId", "j.jobId")
            .join("jobcategories as c", "c.jobId", "j.jobId")
            .join("companies as cp", "cp.companyId", "j.companyId")
            .join("joblocations as l", "l.jobId", "j.jobId")
            .join("jobbenefits as b", "b.jobId", "j.jobId")
            .where("j.jobId", id)
            .select("*");
            
        let groupedJobs = _.groupBy(result, 'jobId');

        // Dùng map để tái cấu trúc dữ liệu
        let jobs = _.map(groupedJobs, (items, jobId) => {
            // Lấy phần tử đầu tiên làm mẫu chung
            const baseInfo = items[0];
            return {
                jobId: baseInfo.jobId,
                jobTitle: baseInfo.jobTitle,
                jobDescription: baseInfo.jobDescription,
                jobRequirement: baseInfo.jobRequirement,
                salaryMin: baseInfo.salaryMin,
                salaryMax: baseInfo.salaryMax,
                skills: _.uniq(items.map(i => i.skill)), // loại bỏ trùng lặp skill
                category: baseInfo.category,
                location: baseInfo.location,
                company: {
                    companyId: baseInfo.companyId,
                    name: baseInfo.name,
                    logo: baseInfo.logo,
                },
                benefits: _.uniqBy(items.map(i => ({
                    benefitName: i.benefitName,
                    benefitValue: i.benefitValue
                })), 'benefitName') // loại bỏ trùng lặp benefit
            };
        });
        return jobs;
    } catch (error) {
        throw error;
    }
};

module.exports.createJob = async function () {
    try {

    } catch (error) {
        throw error;
    }
};

module.exports.updateJob = async function () {

};

module.exports.deleteJob = async function () {

};