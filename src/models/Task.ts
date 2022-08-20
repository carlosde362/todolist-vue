export default class Task {
  content: string;
  isRemove: boolean = false;
  isComplete: boolean = false;

  constructor(content: string) {
    this.content = content;
  }
}
