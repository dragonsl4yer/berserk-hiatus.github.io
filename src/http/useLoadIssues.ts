import { onMounted, Ref, ref } from "vue";

export default function useUserRepositories(path: string, dir: string): {
  issues: Ref<IssueInfo[]>;
  loading: Ref<Boolean>;
} {
  const loading = ref(false);

  const issues = ref(new Array<IssueInfo>());

  onMounted(async () => {
    try {
      loading.value = true;
      const response = await fetch(`${path}/data/${dir}/issues.json`);
      issues.value = await response.json();
    } finally {
      loading.value = false;
    }
  });

  return {
    issues,
    loading,
  };
}
