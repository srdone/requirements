var Requirement = function (desc, itemNum, order, award, isAward, type) {
  this.desc = desc || '';
  this.itemNum = itemNum || '';
  this.order = order || 0;
  this.award = award || '';
  this.isAward = isAward || false;
  this.type = type || 'requirement';
  this.prereqs = [];

  this.id = this.generateId();
};
Requirement.prototype.generateId = function () {
  return this.award + '-' + this.itemNum;
};
Requirement.prototype.addPrereq = function () {
  
};
