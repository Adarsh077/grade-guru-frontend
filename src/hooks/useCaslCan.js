import { createMongoAbility, subject } from "@casl/ability";
import { useSelector } from "react-redux";

import { userAbilityStatementsSelector } from "@/store/user/user.selectors";

/**
 *
 * @param {*} requiredAbilities { action: caslActions, subject: caslSubjects, field: caslFields },
 * @returns Boolean
 */
const useCaslCan = (requiredAbilities) => {
  const abilityStatements = useSelector(userAbilityStatementsSelector);

  if (!Array.isArray(requiredAbilities)) return false;

  if (!requiredAbilities.length) return true;

  const ability = createAbilityFrom(abilityStatements);

  if (!ability) return false;

  for (const requiredAbility of requiredAbilities) {
    if (!requiredAbility.action || !requiredAbility.subject) {
      throw Error("requiredAbility malformed!");
    }

    if (requiredAbility.for) {
      requiredAbility.subject = subject(
        requiredAbility.subject,
        requiredAbility.for
      );
    }

    let canPerformAction = false;
    if (requiredAbility.field) {
      canPerformAction = ability.can(
        requiredAbility.action,
        requiredAbility.subject,
        requiredAbility.field
      );
    } else {
      canPerformAction = ability.can(
        requiredAbility.action,
        requiredAbility.subject
      );
    }

    if (!canPerformAction) {
      return false;
    }
  }

  return true;
};

const createAbilityFrom = (rules) => {
  if (!rules || !rules.length) {
    return null;
  }

  const ability = createMongoAbility(rules);

  return ability;
};

export default useCaslCan;
