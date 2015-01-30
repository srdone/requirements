var Requirement = function (desc, itemNum, order, award, isAward, type) {
  this.desc = desc || '';
  this.itemNum = itemNum || '';
  this.order = order || 0;
  this.award = award || '';
  this.isAward = isAward || false;
  this.type = type || 'requirement';
  this._prereqs = [];

  this.id = this.generateId();
};
Requirement.prototype.generateId = function () {
  return this.award + '-' + this.itemNum;
};
Requirement.prototype.addPrereq = function (req) {
  this._prereqs.push(req.id);
};
// @param req {Requirement} A requirement object
Requirement.prototype.removePrereq = function (req) {
  this._prereqs.splice(this._prereqs.indexOf(req.id), 1);
};
Requirement.prototype.getPrereqs = function () {
  return this._prereqs;
};
