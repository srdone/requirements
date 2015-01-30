var Requirement = function (desc, itemNum, order, award, isAward, type) {
  this.desc = desc || '';
  this.itemNum = itemNum || '';
  this.order = order || 0;
  this.award = award || '';
  this.isAward = isAward || false;
  this.type = type || 'requirement';
  this._prereqs = {};

  this.id = this.generateId();
};
Requirement.prototype.generateId = function () {
  return this.award + '-' + this.itemNum;
};
Requirement.prototype.addPrereq = function (req) {
  this._prereqs[req.id] = req;
};
// @param req {Requirement} A requirement object
Requirement.prototype.removePrereq = function (req) {
  delete this._prereqs[req.id];
};
Requirement.prototype.getPrereqs = function () {
  return this._prereqs;
};
Requirement.prototype.prereqsComplete = function (reqsCompleted) {
  for (var key in this._prereqs) {
    if (this._prereqs.hasOwnProperty(key)) {
      if (reqsCompleted.indexOf(key) === -1) {
        return false;
      }
    }
    return true;
  }
};
